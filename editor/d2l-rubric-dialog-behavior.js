import '../localize-behavior.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};

window.D2L.Rubric = window.D2L.Rubric || {};

/**
 * Behavior for Dialog Handling
 * @polymerBehavior
 */
D2L.PolymerBehaviors.Rubric.DialogBehavior = {
	behaviors: [
		D2L.PolymerBehaviors.Rubric.LocalizeBehavior
	],
	ready: function() {
		this._lpDialogInlineService = this.get('D2L.LP.Web.UI.Desktop.MasterPages.Dialog.Inline', window);
	},
	toIconClass: function(iconType) {
		switch (iconType) {
			case 'alert':
			case 'info':
			case 'warning':
				return 'd2l-dialog-inline-body-' + iconType;
			default:
				return 'd2l-dialog-inline-body-confirm';
		}
	},
	openConfirm: function(settings) {
		var self = this;
		if (!this._lpDialogInlineService) {
			//note: for our demo and testing, we are interested in actually delete, not the lms confirmation dialog
			console.warn('Undefined window.D2L.LP.Web.UI.Desktop.MasterPages.Dialog.Inline'); // eslint-disable-line no-console
			return Promise.resolve();
		}

		return new Promise(function(resolve, reject) {
			self._lpDialogInlineService.Open(
				settings.title,
				settings.primaryMessage,
				settings.secondaryMessage,
				settings.positiveButtonText,
				settings.negativeButtonText,
				(typeof settings.closeButtonText === 'undefined') ? self.localize('closeDialog') : settings.closeButtonText,
				self.toIconClass(settings.iconType),   // icon class
				resolve,
				function() { reject('negativeButtonPressed'); },
				function() { reject('abortButtonPressed'); },
				null,				   // openerID
				null,				   // id
				(typeof settings.equalButtonWidths === 'undefined') ? true : settings.equalButtonWidths);	// default to true
		});
	}
};
