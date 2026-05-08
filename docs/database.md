# DB設計方針

## 1. 方針

- すべてのユーザーデータは `user_id` で分離
- RLSを前提に設計
- 正規化しつつ、MVP 0で運用可能な粒度を優先

## 2. user_idによる分離

- 原則: ユーザー固有テーブルは `user_id NOT NULL`
- 参照時は常に user_id 条件を適用

## 3. RLS前提

- 全ユーザー固有テーブルでRLS有効
- SELECT/INSERT/UPDATE/DELETEポリシーを明示

## 4. 主要テーブル一覧

profiles, user_settings, budget_periods, budgets, meal_slot_rules, meal_slot_exceptions, recipes, recipe_folders, recipe_tags, recipe_ingredients, ingredients, ingredient_categories, meal_plans, meal_plan_items, shopping_plans, shopping_items, stores, ingredient_price_records, actual_meals, nutrition_goals, ai_generation_logs

## 5. テーブル概要

- budgets: 月/週予算
- meal_slot_rules / exceptions: 対象ルールと例外
- recipes 系: レシピ本体、分類、材料
- meal_plans 系: 献立計画
- shopping 系: 買い物予定と明細
- ingredient_price_records: 価格履歴
- actual_meals: 食事実績
- nutrition_goals: 栄養目標（MVP 1）
- ai_generation_logs: AI生成履歴（最小情報）

## 6. 将来的なER設計方針

- レシピと食材は多対多
- 献立と買い物明細を追跡可能に関連付け
- 未確定: 食材マスタの公開範囲

## 7. 初期migration作成時の注意点

- UUID主キーの統一
- created_at/updated_at の自動管理
- 金額は整数（円）で管理
- 税込を前提としたカラム命名
- インデックス: user_id + 日付系を優先
