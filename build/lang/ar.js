import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
 * Ar lang terms
 * @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangArBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangArBehavior = {
	ar: {
		'addCriteriaGroup': 'إضافة مجموعة معايير',
		'addCriterion': 'إضافة معيار',
		'addFeedback': 'إضافة ملاحظات',
		'addLevel': 'إضافة مستوى',
		'addLevelAppend': 'إضافة مستوى جديد بعد {name}',
		'addLevelPrepend': 'إضافة مستوى جديد قبل {name}',
		'addOverallLevelAppend': 'إضافة مستوى إجمالي جديد بعد {name}',
		'addOverallLevelPrepend': 'إضافة مستوى إجمالي جديد قبل {name}',
		'advancedAvailabilityHeader': 'التوفر المتقدم',
		'associationsSaveFailed': 'تعذّر حفظ الاقتران',
		'cellPoints': 'نقاط خلية المعيار',
		'changeConfirmationNo': 'إلغاء',
		'changeConfirmationYes': 'متابعة',
		'changeRubricStatusSuccessful': 'تم تغيير حالة آلية التقييم إلى {status}',
		'changeRubricTypeSuccessful': 'تم تغيير نوع آلية التقييم إلى {rubricType}',
		'changeRubricTypeWarnMessage': 'قد يؤدي تغيير آلية التقييم من تحليلية إلى شاملة إلى فقدان البيانات.',
		'changeRubricTypeWarnTitle': 'هل تريد تغيير نوع آلية التقييم؟',
		'changeScoringSuccessful': 'تم تغيير طريقة وضع الدرجات إلى {method}',
		'clearFeedback': 'مسح الملاحظات',
		'clearOverride': 'مسح التجاوز',
		'closeDialog': 'إغلاق',
		'criterionAdded': 'تمت إضافة معيار جديد',
		'criterionAriaLabel': 'المعيار {index, number} من أصل {count, number}',
		'criterionDeleted': 'تم حذف المعيار {name}',
		'criterionDescriptionAriaLabel': 'وصف المعيار {criterionName}، المستوى {levelName}',
		'criterionFeedback': 'ملاحظات حول المعيار',
		'criterionFeedbackAriaLabel': 'ملاحظات حول المعيار {criterionName}، المستوى {levelName}',
		'criterionMoved': 'أصبح {name} الآن المعيار {position}',
		'criterionNameAriaLabel': 'اسم المعيار',
		'criterionOutOf': 'يتيح المعيار {name} الحصول على {value} من النقاط كحدٍّ أقصى',
		'criterionPlaceholder': 'انقر لتحرير المعيار',
		'dashOutOf': '— / {outOf}',
		'deleteConfirmationNo': 'إلغاء',
		'deleteConfirmationYes': 'حذف',
		'deleteCriterionConfirmationText': 'سيحذف هذا الإجراء بشكل نهائي المعيار ومحتوياته.',
		'deleteCriterionConfirmationTitle': 'هل تريد حذف هذا المعيار؟',
		'deleteLevelConfirmationText': 'سيحذف هذا الإجراء بشكل نهائي المستوى ومحتوياته.',
		'deleteLevelConfirmationTitle': 'هل تريد حذف هذا المستوى؟',
		'description': 'الوصف',
		'descriptionInfo': 'أضف وصفًا لمرجعك الشخصي. لن تتم مشاركته مع الطلاب',
		'descriptionReadOnlyMode': 'الوصف (غير مرئي للطلاب)',
		'descriptionReadOnlyPlaceholder': 'ما من وصف',
		'descriptionSaveFailed': 'فشل حفظ الوصف',
		'editFeedback': 'تحرير الملاحظات',
		'editRubric': 'تحرير آلية التقييم',
		'errorText': 'عذرًا! نواجه مشكلة في إنشاء الاتصال. ننصحك بتحديث الصفحة أو المحاولة مجددًا في وقت لاحق.',
		'feedback': 'الملاحظات',
		'feedbackSaveFailed': 'تعذّر حفظ الملاحظات',
		'groupAdded': 'تمت إضافة مجموعة معايير جديدة',
		'groupName': 'اسم مجموعة المعايير',
		'groupNameSaveFailed': 'تعذّر حفظ اسم مجموعة المعايير',
		'groupRegion': 'مجموعة المعايير {name}',
		'helpAssociations': 'ما المقصود بالاقترانات؟',
		'hideScore': 'إخفاء مجموع الدرجات عن الطلاب',
		'hideScoreHeader': 'إمكانية رؤية مجموع الدرجات',
		'initialFeedback': 'الملاحظات الأولية',
		'levelAchieved': 'المستوى الذي تم بلوغه:',
		'levelAppended': 'تمت إضافة مستوى جديد بعد {name}',
		'levelDeleted': 'تم حذف المستوى {name}',
		'levelName': 'اسم المستوى',
		'levelNameAndBulletPoint': '{levelName} \u2022',
		'levelPoints': 'نقاط المستوى',
		'levelPrepended': 'تمت إضافة مستوى جديد قبل {name}',
		'lockedAlertText': 'لا يمكن تحرير آلية التقييم هذه بسبب استخدامها مسبقًا لتقييم عمل المتعلّم',
		'moveCriterionDown': 'نقل المعيار {position} إلى الأسفل',
		'moveCriterionUp': 'نقل المعيار {position} إلى الأعلى',
		'name': 'الاسم',
		'nameIsRequired': 'الاسم مطلوب',
		'nameSaveFailed': 'تعذّر حفظ الاسم',
		'newAssociationLabel': 'السماح باقترانات جديدة في',
		'numberAndPercentage': '{number} %',
		'numberAndPoints': '{number} {number, plural, one {نقطة} other {من النقاط}}',
		'options': 'الخيارات',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'وصف إجمالي للمستوى {levelName}',
		'overallFeedback': 'الملاحظات الإجمالية',
		'overallFeedbackAriaLabel': 'الملاحظات الإجمالية للمستوى {levelName}',
		'overallLevelDeleted': 'تم حذف المستوى الإجمالي {name}',
		'overallLevelName': 'اسم المستوى الإجمالي',
		'overallLevelRangeStart': 'نطاق بدء المستوى الإجمالي',
		'overallScore': 'مجموع الدرجات الإجمالي',
		'overallScoreDescription': 'استنادًا إلى مجموع درجات آلية التقييم الإجمالية، يتم تعيين مستوى تحصيل لكل فرض مُقدَّم.',
		'overallScoreHeader': 'مجموع الدرجات الإجمالي',
		'overriddenScoreTip': 'تم استبدال مجموع درجات المعيار',
		'overriddenTotalScoreTip': 'تم استبدال مجموع درجات آلية التقييم الإجمالية. لن يتم بعد الآن تحديث مجموع الدرجات استنادًا إلى التغييرات في آلية التقييم.',
		'overrideLabel': 'تجاوز',
		'percentage': '{number} %',
		'points': '{number} {number, plural, one {نقطة} other {من النقاط}}',
		'pointsAbbreviation': 'نقطة',
		'pointsAreRequired': 'قيمة النقطة مطلوبة',
		'pointsMinimum': '{number} {number, plural, one {نقطة} other {من النقاط}} كحد أدنى',
		'pointsSaveFailed': 'فشل حفظ النقاط',
		'preview': 'معاينة',
		'rangeStartInvalid': 'قيمة بدء النطاق غير صالحة',
		'rangeStartOrMore': 'أو أكثر',
		'rangeStartRequired': 'قيمة بدء النطاق مطلوبة',
		'refreshText': 'تحديث الصفحة',
		'removeCriterion': 'إزالة المعيار {name}',
		'removeLevel': 'إزالة المستوى {name}',
		'removeOverallLevel': 'إزالة المستوى الإجمالي {name}',
		'reverseLevelOrder': 'عكس ترتيب المستويات',
		'reverseLevelsSuccessful': 'تم عكس ترتيب المستويات',
		'rubricLoadingErrorAriaAlert': 'حدثت مشكلة في تحميل آلية التقييم. يتعذّر عرضها.',
		'rubricLoadingErrorMessage': 'عذرًا، تعذّر علينا عرض آلية التقييم.',
		'rubricSavingErrorAriaAlert': 'حدثت مشكلة أثناء حفظ آلية التقييم.',
		'rubricSavingErrorMessage': 'حدث خطأ ما. يُرجى التحقق من آلية التقييم.',
		'rubricStatus': 'الحالة: {status}',
		'rubricSummaryA11y': 'يسرد هذا الجدول أسماء المعايير وأسماء مجموعات المعايير في العمود الأول. يسرد الصف الأول أسماء المستويات ويشمل مجموع الدرجات إذا كانت آلية التقييم تستخدم طريقة رقمية لتسجيل مجموع الدرجات.',
		'rubricType': 'النوع: {rubricType}',
		'rubricVisibility': 'إمكانية رؤية آلية التقييم',
		'rubricVisibilityAlways': 'آلية التقييم مرئية للطلاب',
		'rubricVisibilityNever': 'إن آلية التقييم مخفية عن الطلاب',
		'rubricVisibilityOnceFeedbackPosted': 'آلية التقييم مخفية عن الطلاب إلى حين نشر الملاحظات',
		'rubricVisibilitySaveFailed': 'تعذّر تغيير إمكانية عرض آلية التقييم.',
		'scoreOutOf': '{score} ‏/ {outOf}',
		'scoresVisibilityHidden': 'إن مجموع الدرجات مخفي عن الطلاب',
		'scoresVisibilityVisible': 'إن مجموع الدرجات مرئي للطلاب',
		'scoring': 'طرق تسجيل النقاط: {method}',
		'selectNextLevel': 'تحديد المستوى التالي',
		'selectPreviousLevel': 'تحديد المستوى السابق',
		'setScoreVisibilityFailed': 'تعذّر إعداد إمكانية رؤية مجموع العلامات.',
		'statistics': 'الإحصاءات',
		'total': 'المجموع',
		'totalScoreAriaLabel': 'تشمل آلية التقييم مجموع درجات يساوي {value} من النقاط.',
		'totalScoreLabel': 'مجموع درجات آلية التقييم'
	}
};
