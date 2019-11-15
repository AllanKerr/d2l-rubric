import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/iron-media-query/iron-media-query.js';
import 'd2l-accordion/d2l-accordion.js';
import 'd2l-accordion/d2l-accordion-collapse.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';

/**
 * An adapter for the Rubrics component to get platform-specific ordering of components without
 * owning the specific rendering logic.
 */
window.customElements.define('d2l-rubric-adapter', class RubricAdapter extends PolymerElement {
	static get properties() {
		return {
			hasAlerts: Boolean,
			rubricName: String,
			_isMobile: {
				type: Boolean,
				value: false,
			},
		};
	}

	static get template() {
		return html`
			<iron-media-query query="(max-width: 614px)" query-matches="{{_isMobile}}"></iron-media-query>
			<slot name="alerts"></slot>
			<template is="dom-if" if="[[!_hasAlerts(hasAlerts)]]">
				<template is="dom-if" if="[[isMobile(_isMobile)]]" restamp>
					<d2l-accordion flex>
						<d2l-accordion-collapse flex>
							<div slot="header">
								<d2l-icon icon="[[_getRubricIcon(assessmentEntity)]]"></d2l-icon>
								<span>[[rubricName]]</span>
							</div>
							<slot></slot>
						</d2l-accordion-collapse>
					</d2l-accordion>
				</template>
				<template is="dom-if" if="[[!isMobile(_isMobile)]]" restamp>
					<slot></slot>
				</template>
			</template>
		`;
	}

	isMobile(mobile) {
		return !!mobile;
	}

	_hasAlerts(hasAlerts) {
		return !!hasAlerts;
	}

	_getRubricIcon(assessmentEntity) {
		const icon = assessmentEntity && assessmentEntity.hasClass('completed')
			? 'd2l-tier1:rubric-graded'
			: 'd2l-tier1:rubric';

		return icon;
	}
});
