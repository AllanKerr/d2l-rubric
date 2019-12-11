import '@polymer/polymer/polymer-legacy.js';
import './localize-behavior.js';
import './assessment-result-behavior.js';
import './editor/d2l-rubric-error-handling-behavior.js';
import 'd2l-colors/d2l-colors.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import 's-html/s-html.js';
import 'd2l-inputs/d2l-input-text.js';
import './rubric-siren-entity.js';
import 'd2l-tooltip/d2l-tooltip.js';
import '@polymer/iron-media-query/iron-media-query.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-rubric-editable-score">
	<template strip-whitespace="">
		<style>
			:host {
				display: block;
			}
			:host([overridden-styling]) {
					border-radius: 0.3rem;
					background-color: var(--d2l-color-celestine-plus-2);
			}
			:host(.compact:not([editor-styling])),
			:host([compact]:not([editor-styling])) {
				padding: 0.5rem 0.5rem 0.5rem 0.6rem;
			}
			:host(.compact:focus:not([editor-styling])),
			:host([compact]:focus:not([editor-styling])),
			:host(.compact:hover:not([editor-styling])),
			:host([compact]:hover:not([editor-styling])) {
				padding: calc(0.5rem - 1px) calc(0.5rem - 1px) calc(0.5rem - 1px) calc(0.6rem - 1px);
				border-radius: 0.3rem;
				border: 1px solid var(--d2l-color-celestine);
			}
			.total-score-container {
				display: flex;
				justify-content: center;
			}
			.criterion-score-container {
				display: flex;
				justify-content: space-between;
			}
			.editing-component {
				display: inline;
			}
			d2l-input-text {
				width: 75px;
			}
			.score-out-of.overridden {
				color: var(--d2l-color-celestine);
				display: inline-flex;
			}
			.star {
				display: none;
			}
			.score-out-of.overridden .star {
				display: inline-flex;
			}
			.right {
				@apply --d2l-body-compact-text;
				margin-left: 3px;
				display: inline;
				line-height: 2.2rem;
			}
			.clear-override-button-mobile {
				display: none;
			}
			.override-label {
				display: none;
			}

			:host(.compact) .clear-override-button-mobile,
			:host([compact]) .clear-override-button-mobile {
				display: inline-flex;
				padding: 6px 0;
			}
			:host(.compact) .override-label,
			:host([compact]) .override-label {
				margin-left: 12px;
				padding: 6px 0;
				display: inline-flex;
				font-size: 15px;
				font-weight: bold;
				color: var(--d2l-color-ferrite) !important;
				align-items : center;
			}
			.editing-component {
				margin-right: 0;
				display: inline-flex;
				padding: 6px 12px 6px 0;
				align-items : center;
			}

			[hidden] {
				display: none;
			}
		</style>
		<rubric-siren-entity href="[[assessmentHref]]" token="[[token]]" entity="{{assessmentEntity}}"></rubric-siren-entity>
		<rubric-siren-entity href="[[criterionHref]]" token="[[token]]" entity="{{entity}}"></rubric-siren-entity>
		<iron-media-query query="(min-width: 615px)" query-matches="{{_largeScreen}}"></iron-media-query>
		<div id="editable-container">
			<div class$="[[_getContainerClassName(criterionHref)]]" hidden="[[!_isEditingScore]]">
				<template is="dom-if" if="[[!totalScore]]">
					<d2l-button-subtle class="clear-override-button-mobile" id="clear-button" text="[[localize('clearOverride')]]" on-click="_clearCriterionOverride" hidden$="[[!scoreOverridden]]">
					</d2l-button-subtle>
					<div class="override-label" hidden$="[[scoreOverridden]]">[[localize('overrideLabel')]]</div>
				</template>
				<div class="editing-component">
					<d2l-input-text id="text-area" value="{{_score}}" type="number" step="any" min="0" max="100000" on-change="_changeHandler" on-input="_inputHandler" on-blur="_blurHandler" on-keypress="_handleKey" aria-invalid="[[isAriaInvalid(scoreInvalid)]]" prevent-submit="">
					</d2l-input-text>
					<div id="out-of" class="right">[[_localizeOutOf(entity)]]</div>
				</div>
				<template is="dom-if" if="[[scoreInvalid]]">
					<d2l-tooltip id="score-bubble" for="text-area" class="is-error" position="bottom">[[scoreInvalidError]]</d2l-tooltip>
				</template>
			</div>
			<template is="dom-if" if="[[!_isEditingScore]]">
				<div class$="[[_getOutOfClassName(scoreOverridden, readOnly)]]" id="out-of-container">
					[[_localizeOutOf(entity, _score)]]
					<div class="star" id="score-overridden-star">*</div>
				</div>
			</template>
		</div>
		<d2l-tooltip aria-hidden="true" id="override-tooltip" hidden="[[_handleTooltip(scoreOverridden, _isEditingScore)]]" for="editable-container" position="top">[[_localizeStarLabel(totalScore)]]</d2l-tooltip>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-rubric-editable-score',

	properties: {
		compact: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		},
		criterionHref: String,

		/* Entity could be a criterionEntity or a rubricEntity */
		entity: Object,
		_largeScreen: {
			type: Boolean,
			value: true,
			observer: '_largeScreenChanged',
		},
		assessmentHref: {
			type: String,
			value: null
		},
		token: String,

		/* For desktop criteria, this will be the criterion number.
		   For mobile and total score, this will be 1 for true, -1 for false */
		editingScore: {
			type: Number,
			value: -1,
			notify: true,
			observer: '_editingScoreChanged'
		},
		_isEditingScore: {
			type: Boolean,
			value: false,
			computed: '_computeIsEditingScore(criterionNum, editingScore, scoreInvalid)'
		},
		_score: {
			type: Number
		},
		_scoreModified: {
			type: Boolean,
			value: false
		},
		_pendingScoreSaves: {
			type: Number,
			value: 0
		},
		scoreOverridden: {
			type: Boolean,
			value: false
		},
		scoreInvalid: {
			type: Boolean,
			value: false,
			notify: true,
			reflectToAttribute: true
		},
		scoreInvalidError: {
			type: String,
			value: null
		},
		overriddenStyling: {
			type: Boolean,
			value: false,
			reflectToAttribute: true,
			notify: true
		},
		editorStyling: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		},
		totalScore: {
			type: String,
			value: null
		},
		criterionNum: {
			type: Number,
			value: 1
		},
		readOnly: {
			type: Boolean,
			value: true
		},
		parentCell: {
			type: Object,
			value: null
		}
	},

	behaviors: [
		D2L.PolymerBehaviors.Rubric.LocalizeBehavior,
		D2L.PolymerBehaviors.Rubric.AssessmentResultBehavior,
		D2L.PolymerBehaviors.Rubric.ErrorHandlingBehavior
	],

	observers: [
		'_onAssessmentResultChanged(entity, assessmentResult)',
		'_totalScoreChanged(totalScore, entity)',
		'_editingState(entity, _isEditingScore)',
		'_updateStaticView(readOnly, assessmentHref)'
	],
	ready: function() {
		if (this._largeScreen && this.criterionHref) {
			this.$['override-tooltip'].setAttribute(
				'boundary',
				'{left: 0, right: 200}');
		}

		this.addEventListener('click', () => {
			if (!this.readOnly && this.editingScore === -1) {
				this.editingScore = 1;
			}
		});

		this.addEventListener('keydown', () => {
			if (!this.readOnly && this.editingScore === -1) {
				this.editingScore = 1;
			}
		});
	},

	_onAssessmentResultChanged: function(entity, assessmentResult) {
		if (!entity || !assessmentResult) {
			return;
		}
		if (!this.scoreInvalid) {
			this._updateScore(entity, assessmentResult, this.totalScore);
		}

		if (this.totalScore) {
			this.scoreOverridden = this.isTotalScoreOverridden();
			if (!this._isStaticView() && !this._isEditingScore) {
				this.overriddenStyling = this.scoreOverridden;
			}
			return;
		}
		this.scoreOverridden = this.isScoreOverridden(this.criterionHref);
		if (!this._isStaticView() && !this._isEditingScore) {
			this.overriddenStyling = this.scoreOverridden;
		}
	},

	focus: function() {
		var elem = this.$['text-area'];
		elem.focus();
		var inputElem = elem.$$('input');
		if (inputElem && this._largeScreen) {
			elem.$$('input').select();
		}
	},

	_editingScoreChanged: function(newValue) {
		if (!this.scoreInvalid && this.criterionNum === newValue) {
			afterNextRender(this, function() {
				this.focus();
			}.bind(this));
		}
	},

	_handleKey: function(event) {
		if (event.keyCode === 13) { // enter key
			event.target.blur();
			event.stopPropagation();
			if (this.parentCell) {
				setTimeout(function() { this.parentCell.focus(); }.bind(this), 0);
			}
			return;
		}
	},

	// on firefox, when changing the score with the arrow keys/buttons, d2l-input-text only fires change event and not input event
	_changeHandler: function() {
		this._scoreModified = true;
	},

	_inputHandler: function() {
		this._scoreModified = true;
	},

	_blurHandler: function(event) {
		if (event.relatedTarget && event.relatedTarget.id === 'clear-button') {
			return;
		}
		var innerInput = event.target.$$('input');
		if (!innerInput || !innerInput.checkValidity()) {
			return;
		}
		this.editingScore = -1;

		if (this._scoreModified || this.scoreInvalid) {
			this._scoreModified = false;
			this.toggleBubble('scoreInvalid', false);
			var action;
			var newScore = event.target.value;
			if (newScore === '') {
				action = this._clearOverride();
			} else {
				var oldScore = this.getScore(this.entity, this.assessmentResult, this.totalScore);
				if (parseFloat(newScore) === oldScore) {
					// score didn't change so don't save it
					return;
				}
				action = this._saveScore(newScore);
			}
			this._pendingScoreSaves++;
			action.finally(function() {
				this._pendingScoreSaves--;
			}.bind(this)).then(function() {
				this._updateScore(this.entity, this.assessmentResult, this.totalScore);
			}.bind(this)).catch(function(err) {
				this.handleValidationError('score-bubble', 'scoreInvalid', 'pointsSaveFailed', err);
			}.bind(this));
		}
	},

	_updateScore: function(entity, assessmentResult, totalScore) {
		if (!this._scoreModified && !this._pendingScoreSaves) {
			this.toggleBubble('scoreInvalid', false);
			this._score = this.getScore(entity, assessmentResult, totalScore);
		}
	},

	_saveScore: function(score) {
		if (this.criterionHref) {
			return this.saveCriterionPoints(this.criterionHref, score);
		} else {
			return this.saveTotalPoints(score);
		}
	},

	_clearOverride: function() {
		if (this.criterionHref) {
			return this.clearCriterionOverride(this.criterionHref);
		} else {
			return this.clearTotalScoreOverride();
		}
	},

	_clearCriterionOverride: function(event) {
		event.stopPropagation();

		this.toggleBubble('scoreInvalid', false);
		this.editingScore = -1;
		this._pendingScoreSaves++;
		this.clearCriterionOverride(this.criterionHref).finally(function() {
			this._pendingScoreSaves--;
		}.bind(this)).then(function() {
			this._scoreModified = false;
			this._updateScore(this.entity, this.assessmentResult, this.totalScore);
		}.bind(this)).catch(function(err) {
			this.handleValidationError('score-bubble', 'scoreInvalid', 'pointsSaveFailed', err);
		}.bind(this));
	},

	getScore: function(entity, assessmentResult, totalScore) {
		if (!entity || !assessmentResult) {
			return;
		}
		if (totalScore) {
			return totalScore;
		}
		return this.getAssessedScore(entity, assessmentResult);
	},

	_localizeOutOf: function(entity, score) {
		if (!entity || !entity.properties || !entity.properties.outOf) {
			return null;
		}

		if (score || score === 0) {
			return this.localize('scoreOutOf', 'score', score.toString(), 'outOf', entity.properties.outOf.toString());
		}
		return this.localize('outOf', 'outOf', entity.properties.outOf.toString());
	},

	_getOutOfClassName: function(scoreOverridden, readOnly) {
		var className = 'score-out-of';
		if (scoreOverridden && !readOnly) {
			className += ' overridden';
		}
		return className;
	},

	_getContainerClassName: function(criterionHref) {
		if (!criterionHref) {
			return 'total-score-container';
		}
		return 'criterion-score-container';
	},

	_computeIsEditingScore: function(criterionNum, editingScore, scoreInvalid) {
		return criterionNum === editingScore || scoreInvalid;
	},

	_localizeStarLabel: function(totalScore) {
		if (totalScore) {
			return this.localize('overriddenTotalScoreTip');
		} else {
			return this.localize('overriddenScoreTip');
		}
	},

	_totalScoreChanged: function(score, entity) {
		var outOf;
		if (entity && entity.properties) {
			outOf = entity.properties.outOf;
		}
		if (score && outOf) {
			this.fire('d2l-rubric-total-score-changed', {score:score, outOf: outOf.toString()});
		} else if (score) {
			this.fire('d2l-rubric-total-score-changed', {score:score});
		}
	},

	_editingState: function(entity, isEditingScore) {
		if (!entity) {
			return;
		}
		if (isEditingScore) {
			this.editorStyling = true;
			this.overriddenStyling = false;
		} else {
			this.editorStyling = false;
			if (this.scoreOverridden && !this._isStaticView()) {
				this.overriddenStyling = true;
			}
		}
	},

	_handleTooltip: function(scoreOverridden, isEditingScore) {
		return !scoreOverridden || isEditingScore;
	},

	_isStaticView: function() {
		return this.readOnly || !this.assessmentHref;
	},

	_largeScreenChanged: function(largeScreen) {
		this.classList.toggle('compact', !largeScreen);
	},

	_updateStaticView(readOnly, assessmentHref) {
		const isStaticView = readOnly || !assessmentHref;

		isStaticView
			? this.removeAttribute('tabindex')
			: this.setAttribute('tabindex', '0');
	}
});
