import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
* Ja lang terms
* @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangJaBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangJaBehavior = {
	ja: {
		'addCriteriaGroup': '条件グループの追加',
		'addCriterion': '条件の追加',
		'addFeedback': 'フィードバックの追加',
		'addLevel': 'レベルの追加',
		'addLevelPrepend': '{name} の前に新しいレベルを追加',
		'addLevelAppend': '{name} の後ろに新しいレベルを追加',
		'addOverallLevelAppend': '{name} の後ろに新しい全体レベルを追加',
		'addOverallLevelPrepend': '{name} の前に新しい全体レベルを追加',
		'cellPoints': '条件セルのポイント',
		'changeScoringSuccessful': 'スコアリング方法が {method} に変更されました',
		'clearOverride': '上書きのクリア',
		'clearFeedback': 'フィードバックのクリア',
		'criterionAdded': '新規条件が追加されました',
		'criterionAriaLabel': '条件 {index, number}/{count, number}',
		'criterionDeleted': '{name} 条件を削除しました',
		'criterionDescriptionAriaLabel': '条件 {criterionName}、レベル {levelName} の説明',
		'criterionFeedback': 'Criterion Feedback',
		'criterionFeedbackAriaLabel': '条件 {criterionName}、レベル {levelName} のフィードバック',
		'criterionNameAriaLabel': '条件名',
		'criterionOutOf': '条件 {name} は最大 {value} ポイントです',
		'criterionPlaceholder': 'クリックして条件を編集します',
		'dashOutOf': '— / {outOf}',
		'description': '説明',
		'descriptionInfo': '個人用参照の説明を追加します。これは受講者と共有されません。',
		'descriptionSaveFailed': '説明を保存できませんでした',
		'editFeedback': 'フィードバックの編集',
		'errorText': '申し訳ありません。接続で問題が発生しています。ページをリフレッシュするか、後でもう一度お試しください。',
		'feedback': 'フィードバック',
		'feedbackSaveFailed': 'フィードバックを保存できませんでした',
		'groupAdded': '新しい条件グループが追加されました',
		'groupName': '条件グループ名',
		'groupRegion': '条件グループ {name}',
		'helpAssociations': '関連付けとは？',
		'hideScore': '受講者にスコアを表示しない',
		'hideScoreHeader': 'スコアの表示',
		'levelAchieved': '達成済みレベル: ',
		'levelAppended': '新規レベルが {name} の後ろに追加されました',
		'levelDeleted': '{name} レベルが削除されました',
		'levelName': 'レベル名',
		'levelNameAndPoints': '{levelName} - {number} {number, plural, one {ポイント} other {ポイント}}',
		'levelNameAndPercentage': '{levelName} - {number} %',
		'levelPoints': 'レベルポイント',
		'levelPrepended': '新規レベルが {name} の前に追加されました',
		'name': '名前',
		'nameIsRequired': '名前は必須です',
		'nameSaveFailed': '名前を保存できませんでした',
		'options': 'オプション',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'レベル {levelName} の全体の説明',
		'overallFeedback': '全体のフィードバック',
		'overallFeedbackAriaLabel': 'レベル {levelName} の全体のフィードバック',
		'overallLevelDeleted': '{name} 全体レベルが削除されました',
		'overallLevelName': '全体レベル名',
		'overallScoreDescription': '各提出物には、その全体の注釈スコアに基づいて、達成レベルが指定されます。',
		'overallScoreHeader': '全体のスコア',
		'overallScore': '全体のスコア',
		'overriddenScoreTip': '条件スコアが上書きされました。',
		'overriddenTotalScoreTip': '全体の注釈スコアが上書きされました。注釈の変更に基づくスコアの更新が行われなくなります。',
		'points': '{number} {number, plural, one {ポイント} other {ポイント}}',
		'pointsAbbreviation': 'ポイント',
		'pointsAreRequired': 'ポイントの値は必須です',
		'pointsMinimum': '最低{number}{number, plural, one {ポイント} other {ポイント}}',
		'pointsSaveFailed': 'ポイントを保存できませんでした',
		'percentage': '{number} ％',
		'preview': 'プレビュー',
		'initialFeedback': '最初のフィードバック',
		'refreshText': 'ページの更新',
		'removeCriterion': '条件 {name} の削除',
		'removeLevel': 'レベル {name} の削除',
		'removeOverallLevel': '全体レベル {name} の削除',
		'reverseLevelOrder': 'レベル順序の反転',
		'reverseLevelsSuccessful': 'レベル順序が反転されました',
		'rubricLoadingErrorAriaAlert': '注釈の読み込み中に問題が発生しました。表示できません。',
		'rubricLoadingErrorMessage': '申し訳ありません。注釈を表示できませんでした。',
		'rubricSavingErrorAriaAlert': '注釈の保存中に問題が発生しました。',
		'rubricSavingErrorMessage': '問題が発生しました。注釈を確認してください。',
		'rubricSummaryA11y': 'この表では 1 列目に条件と条件グループの名前が表示されます。注釈で数値によるスコアリング方法が使用されている場合、1 列目にはレベル名が表示され、スコアが記載されます。',
		'rubricVisibility': '注釈の表示',
		'rubricVisibilityAlways': '注釈は受講者に表示されます',
		'rubricVisibilityOnceFeedbackPosted': '注釈は、フィードバックの発行まで受講者に表示されません',
		'rubricVisibilityNever': '注釈は受講者に表示されません',
		'rubricVisibilitySaveFailed': '注釈の表示を変更できませんでした。',
		'scoreOutOf': '{score}/{outOf}',
		'scoring': 'スコア: {method}',
		'setScoreVisibilityFailed': 'スコアの表示を設定できませんでした。',
		'scoresVisibilityHidden': 'スコアは受講生に表示されません',
		'scoresVisibilityVisible': 'スコアは受講生に表示されます',
		'statistics': '統計',
		'total': '合計',
		'totalScoreAriaLabel': '注釈は最大スコア合計 {value} ポイントです。',
		'moveCriterionUp': '条件を上に {position} 移動',
		'moveCriterionDown': '条件を下に {position} 移動',
		'criterionMoved': '{name} は現在、条件 {position} です',
		'rangeStartOrMore': 'その他',
		'overallLevelRangeStart': '全体レベルの開始範囲',
		'rangeStartRequired': '範囲の開始値は必須です',
		'rangeStartInvalid': '範囲の開始値が無効です',
		'closeDialog': '閉じる',
		'deleteConfirmationYes': '削除',
		'deleteConfirmationNo': 'キャンセル',
		'deleteLevelConfirmationTitle': 'このレベルを削除しますか？',
		'deleteLevelConfirmationText': '実行すると、このレベルとその内容が完全に削除されます。',
		'deleteCriterionConfirmationTitle': 'この条件を削除しますか？',
		'deleteCriterionConfirmationText': '実行すると、この条件とその内容が完全に削除されます。',
		'rubricType': 'タイプ: {rubricType}',
		'changeRubricTypeSuccessful': '注釈タイプが {rubricType} に変更されました',
		'changeConfirmationYes': '続行',
		'changeConfirmationNo': 'キャンセル',
		'changeRubricTypeWarnTitle': '注釈タイプを変更しますか？',
		'changeRubricTypeWarnMessage': '注釈を分析から総合に変更すると、データが失われる可能性があります。',
		'rubricStatus': 'ステータス: {status}',
		'changeRubricStatusSuccessful': '注釈ステータスが {status} に変更されました',
		'editRubric': '注釈の編集',
		'advancedAvailabilityHeader': '高度な使用',
		'newAssociationLabel': '以下で新しい関連付けを許可:',
		'associationsSaveFailed': '関連付けを保存できませんでした',
		'descriptionReadOnlyMode': '説明（受講者には表示されません）',
		'descriptionReadOnlyPlaceholder': '説明なし',
		'groupNameSaveFailed': '条件グループ名を保存できませんでした'
	}
};
