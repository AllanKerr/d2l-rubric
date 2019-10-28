'use strict';

suite('<d2l-rubric-description-editor>', function() {

	var sandbox;
	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;

	suiteSetup(function() {
		sandbox = sinon.sandbox.create();
	});

	suiteTeardown(function() {
		sandbox.restore();
	});

	suite('smoke test', function() {
		suite('criterion description', function() {
			test('can be instantiated', function() {
				var element = fixture('basic-criterion');
				expect(element.is).to.equal('d2l-rubric-description-editor');
			});

			suite('edit description', function() {

				var fetch;
				var raf = window.requestAnimationFrame;
				var element;

				setup(function(done) {
					element = fixture('basic-criterion');
					/* global getLoadedElement */
					element = getLoadedElement(element, 'static-data/rubrics/organizations/text-only/199/groups/176/criteria/623/0.json', done);
				});

				teardown(function() {
					fetch && fetch.restore();
				});

				test('saves description', function(done) {
					fetch = sinon.stub(window.d2lfetch, 'fetch');
					var promise = Promise.resolve({
						ok: true,
						json: function() {
							return Promise.resolve(JSON.stringify(window.testFixtures.criterion_cell_description_mod));
						}
					});
					fetch.returns(promise);

					var descriptionTextArea = element.$$('d2l-rubric-text-editor');
					descriptionTextArea.value = 'Batman and Robin';
					raf(function() {
						element.addEventListener('d2l-rubric-description-saved', function() {
							var body = fetch.args[0][1].body;
							// Force success in IE - no FormData op support
							expect(body.get && body.get('description') || 'Batman and Robin').to.equal('Batman and Robin');
							done();
						});
						descriptionTextArea.dispatchEvent(new CustomEvent('text-changed', { bubbles: true, cancelable: false, composed: true, detail: {value: descriptionTextArea.value} }));
					});
				});

				test('sets aria-invalid if saving description fails', function(done) {
					fetch = sinon.stub(window.d2lfetch, 'fetch');
					var promise = Promise.resolve({
						ok: false,
						json: function() {
							return Promise.resolve(JSON.stringify({}));
						}
					});
					fetch.returns(promise);

					var descriptionTextArea = element.$$('d2l-rubric-text-editor');
					descriptionTextArea.value = 'Batman and Robin';
					raf(function() {
						element.addEventListener('d2l-siren-entity-save-error', function() {
							flush(function() {
								// don't test in IE
								if (!isIE) {
									expect(descriptionTextArea.ariaInvalid).to.equal('true');
								}
								done();
							});
						});
						descriptionTextArea.dispatchEvent(new CustomEvent('text-changed', { bubbles: true, cancelable: false, composed: true, detail: {value: descriptionTextArea.value} }));
					});
				});
			});

			suite('readonly description', function() {

				var element;

				setup(function(done) {
					element = fixture('readonly-criterion');
					element = getLoadedElement(element, 'static-data/rubrics/organizations/text-only/199/groups/176/criteria/623/1.json', done);
				});

				test('description is disabled', function() {
					var descriptionTextArea = element.$$('d2l-rubric-text-editor');
					expect(descriptionTextArea.disabled).to.be.true;
				});

			});

			suite('edit points', function() {

				var fetch;
				var raf = window.requestAnimationFrame;
				var element;

				setup(function(done) {
					element = fixture('basic-custom-points');
					element = getLoadedElement(element, 'static-data/rubrics/organizations/custom-points/199/groups/176/criteria/623/0.json', done);
				});

				teardown(function() {
					fetch && fetch.restore();
				});

				test('saves points', function(done) {
					fetch = sinon.stub(window.d2lfetch, 'fetch');
					var promise = Promise.resolve({
						ok: true,
						json: function() {
							return Promise.resolve(JSON.stringify(window.testFixtures.criterion_cell_points_mod));
						}
					});
					fetch.returns(promise);

					var pointsTextInput = element.$$('#cell-points');
					pointsTextInput.value = '10';
					raf(function() {
						element.addEventListener('d2l-rubric-criterion-cell-points-saved', function() {
							var body = fetch.args[0][1].body;
							// Force success in IE - no FormData op support
							expect(body.get && body.get('points') || '10').to.equal('10');
							done();
						});
						pointsTextInput.dispatchEvent(new CustomEvent('input', { bubbles: true, cancelable: false, composed: true }));
						pointsTextInput.dispatchEvent(new CustomEvent('blur', { bubbles: true, cancelable: false, composed: true }));
					});
				});

				test('sets aria-invalid if saving points fails', function(done) {
					fetch = sinon.stub(window.d2lfetch, 'fetch');
					var promise = Promise.resolve({
						ok: false,
						json: function() {
							return Promise.resolve(JSON.stringify({}));
						}
					});
					fetch.returns(promise);

					var pointsTextInput = element.$$('d2l-input-text');
					pointsTextInput.value = '10';
					raf(function() {
						element.addEventListener('d2l-siren-entity-save-error', function() {
							flush(function() {
								// don't test in IE
								if (!isIE) {
									expect(pointsTextInput.ariaInvalid).to.equal('true');
								}
								done();
							});
						});
						pointsTextInput.dispatchEvent(new CustomEvent('input', { bubbles: true, cancelable: false, composed: true }));
						pointsTextInput.dispatchEvent(new CustomEvent('blur', { bubbles: true, cancelable: false, composed: true }));
					});
				});
			});

			suite('readonly points', function() {

				var element;

				setup(function(done) {
					element = fixture('readonly-custom-points');
					element = getLoadedElement(element, 'static-data/rubrics/organizations/custom-points/199/groups/176/criteria/623/1.json', done);
				});

				test('points field is disabled', function() {
					var pointsTextInput = element.$$('d2l-input-text');
					expect(pointsTextInput.disabled).to.be.true;
				});

			});
		});

		suite('overall level description', function() {
			test('can be instantiated', function() {
				var element = fixture('basic-overall-level');
				expect(element.is).to.equal('d2l-rubric-description-editor');
			});

			suite('edit description', function() {

				var fetch;
				var raf = window.requestAnimationFrame;
				var element;

				setup(function(done) {
					element = fixture('basic-overall-level');
					element = getLoadedElement(element, 'static-data/rubrics/organizations/text-only/199/groups/176/criteria/623/0.json', done);
				});

				teardown(function() {
					fetch && fetch.restore();
				});

				test('saves description', function(done) {
					fetch = sinon.stub(window.d2lfetch, 'fetch');
					var promise = Promise.resolve({
						ok: true,
						json: function() {
							return Promise.resolve(JSON.stringify(window.testFixtures.overall_level_description_mod));
						}
					});
					fetch.returns(promise);

					var descriptionTextArea = element.$$('d2l-rubric-text-editor');
					descriptionTextArea.value = 'Batman and Robin';
					raf(function() {
						element.addEventListener('d2l-rubric-description-saved', function() {
							var body = fetch.args[0][1].body;
							// Force success in IE - no FormData op support
							expect(body.get && body.get('description') || 'Batman and Robin').to.equal('Batman and Robin');
							done();
						});
						descriptionTextArea.dispatchEvent(new CustomEvent('text-changed', { bubbles: true, cancelable: false, composed: true, detail: {value: descriptionTextArea.value} }));
					});
				});

				test('sets aria-invalid if saving description fails', function(done) {
					fetch = sinon.stub(window.d2lfetch, 'fetch');
					var promise = Promise.resolve({
						ok: false,
						json: function() {
							return Promise.resolve(JSON.stringify({}));
						}
					});
					fetch.returns(promise);

					var descriptionTextArea = element.$$('d2l-rubric-text-editor');
					descriptionTextArea.value = 'Batman and Robin';
					raf(function() {
						element.addEventListener('d2l-siren-entity-save-error', function() {
							flush(function() {
								// don't test in IE
								if (!isIE) {
									expect(descriptionTextArea.ariaInvalid).to.equal('true');
								}
								done();
							});
						});
						descriptionTextArea.dispatchEvent(new CustomEvent('text-changed', { bubbles: true, cancelable: false, composed: true, detail: {value: descriptionTextArea.value} }));
					});
				});
			});

			suite('readonly', function() {

				var element;

				setup(function(done) {
					element = fixture('readonly-overall-level');
					element = getLoadedElement(element, 'static-data/rubrics/organizations/text-only/199/overall-levels/2.json', done);
				});

				test('description is disabled', function() {
					var descriptionTextArea = element.$$('d2l-rubric-text-editor');
					expect(descriptionTextArea.disabled).to.be.true;
				});

			});
		});
	});
});
