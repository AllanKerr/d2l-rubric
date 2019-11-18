import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/iron-media-query/iron-media-query.js';
import 'd2l-accordion/d2l-accordion.js';
import 'd2l-accordion/d2l-accordion-collapse.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier3-icons.js';

/**
 * An adapter for the Rubrics component to get platform-specific ordering of components without
 * owning the specific rendering logic.
 */
window.customElements.define('d2l-rubric-adapter', class RubricAdapter extends PolymerElement {
	static get properties() {
		return {
			compact: Boolean,
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
			<style>
				.rubric-header-icon,
				.rubric-header-title {
					color: var(--d2l-color-celestine);
				}

				.rubric-header-title {
					font-size: 0.8rem;
					text-align: bottom;
				}

				.rubric-header-title-container {
					display: inline-flex;
					flex-direction: column;
					vertical-align: middle;
				}

				.rubric-header-out-of-container {
					height: 0.8rem;
				}
			</style>

			<iron-media-query query="(max-width: 614px)" query-matches="{{_isMobile}}"></iron-media-query>
			<slot name="alerts"></slot>
			<template is="dom-if" if="[[!_hasAlerts(hasAlerts)]]">
				<template is="dom-if" if="[[_showCompactView(_isMobile, compact)]]" restamp>
					<d2l-accordion flex>
						<d2l-accordion-collapse flex>
							<div slot="header">
								<d2l-icon
									class="rubric-header-icon"
									icon="[[_getRubricIcon(assessmentEntity)]]">
								</d2l-icon>
								<span class=rubric-header-title-container>
									<div class="rubric-header-title">[[rubricName]]</div>
									<div class="rubric-header-out-of-container"></div>
								</span>
							</div>
							<slot></slot>
						</d2l-accordion-collapse>
					</d2l-accordion>
				</template>
				<template is="dom-if" if="[[!_showCompactView(_isMobile, compact)]]" restamp>
					<slot></slot>
				</template>
			</template>
		`;
	}

	_showCompactView(mobile, compact) {
		return compact || !!mobile;
	}

	_hasAlerts(hasAlerts) {
		return !!hasAlerts;
	}

	_getRubricIcon(assessmentEntity) {
		const icon = assessmentEntity && assessmentEntity.hasClass('completed')
			? 'd2l-tier3:rubric-graded'
			: 'd2l-tier3:rubric';

		return icon;
	}
});
