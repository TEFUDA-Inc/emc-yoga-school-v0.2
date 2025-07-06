# EMC Yoga School プロジェクト概要

## 1. 基本情報

*   **プロジェクト名:** EMC Yoga School
*   **目的:** オンラインヨガスクールのWebアプリケーション開発
*   **現在のフェーズ:** 初期セットアップとUIコンポーネントの準備
*   **GitHubリポジトリ:** [https://github.com/TEFUDA-Inc/emc-yoga-school-v0.2](https://github.com/TEFUDA-Inc/emc-yoga-school-v0.2)
*   **主要技術スタック:**
    *   **フロントエンド:** Next.js (React, TypeScript), Tailwind CSS
    *   **バックエンド/DB:** Supabase (PostgreSQL, Auth, Storage) - *今後の実装予定*
    *   **動画:** YouTube API - *今後の実装予定*

## 2. 本日行った作業

本日（2025年7月6日）は、主にプロジェクトの初期セットアップとUIコンポーネントの準備、およびバージョン管理システムの導入を行いました。

1.  **Figmaインポート用HTMLファイルの生成と整理:**
    *   `claude-idea` フォルダ内の既存UIコンポーネント（`admin_dasuboard_and_component_library.js`, `design_system.js`, `lesson_viewer_and_mobile_ui.js`, `main_pages_UI.js`）を基に、Figmaインポート用のHTMLファイルを `claude-idea/figma_export/` ディレクトリに生成しました。
    *   `main_pages.html` が単一ファイルでページ切り替えを行う形式だったため、Figmaでのインポートのしやすさを考慮し、以下の4つの独立したHTMLファイルに分割しました。
        *   `login_page.html`
        *   `dashboard_page.html`
        *   `lessons_page.html`
        *   `profile_page.html`

2.  **不足していたUIページの追加（HTML & Reactコンポーネント）:**
    *   プロジェクトの機能要件に基づき、不足していた以下の主要なUIページについて、Figmaインポート用のHTMLファイルと、Next.jsアプリケーションに組み込むためのReactコンポーネント（`.js`ファイル）をそれぞれ生成しました。
        *   **レッスン編集ページ:** `lesson_edit_page.html` / `lesson_edit_page.js`
        *   **チャプター詳細ページ（受講生向け）:** `chapter_detail_page.html` / `chapter_detail_page.js`
        *   **お知らせ作成・編集ページ:** `announcement_edit_page.html` / `announcement_edit_page.js`
        *   **受講生詳細ページ:** `student_detail_page.html` / `student_detail_page.js`

3.  **Gitリポジトリの初期化とGitHubへのプッシュ:**
    *   現在のプロジェクトディレクトリをGitリポジトリとして初期化し、すべてのファイルをコミットしました。
    *   指定されたGitHubリポジトリ (`https://github.com/TEFUDA-Inc/emc-yoga-school-v0.2`) に、ローカルのコードをプッシュしました。

4.  **Next.jsアプリケーションのセットアップ:**
    *   プロジェクトルート直下に `app` ディレクトリを作成し、その中にNext.jsアプリケーションをセットアップしました（TypeScript, Tailwind CSS, ESLint, App Router, Turbopackを有効化）。
    *   `claude-idea` フォルダ内のReactコンポーネントを `app/src/components/` ディレクトリに移動しました。
    *   `app/src/app/page.tsx` を修正し、`EMCMainPages` コンポーネントがレンダリングされるように設定しました。

5.  **Next.js開発サーバーの起動試行:**
    *   `npm run dev` コマンドで開発サーバーの起動を試みましたが、タイムアウトによりキャンセルされました。

## 3. 今後の計画

今後の開発は、以下のステップで進めていきます。

1.  **Next.js開発サーバーの安定起動:**
    *   開発サーバーが正常に起動し、ブラウザでUIが確認できる状態にします。

2.  **UIコンポーネントの統合:**
    *   現在 `app/src/components/` に配置されている各Reactコンポーネントを、Next.jsのルーティングシステムや状態管理と連携させ、アプリケーションとして機能するように統合します。
    *   特に、管理者ダッシュボードのタブ切り替えや、各詳細ページへの遷移を実装します。

3.  **Supabaseとの連携:**
    *   データベース設計 (`database_relations.html`) に基づき、Supabaseのセットアップとデータモデルの定義を行います。
    *   ユーザー認証、データ取得、データ更新などのAPI連携を実装します。

4.  **コア機能の実装:**
    *   レッスン視聴機能（YouTube API連携、進捗トラッキング）
    *   ライブセッション機能
    *   お知らせ表示機能
    *   ユーザープロフィール管理機能

5.  **管理者機能の実装:**
    *   受講生管理（CRUD操作）
    *   コンテンツ管理（レッスン、チャプター、お知らせのCRUD操作）
    *   学習統計・レポート機能

6.  **レスポンシブデザインの調整:**
    *   モバイルデバイスでの表示最適化を行います。

7.  **テストとデプロイ:**
    *   単体テスト、結合テストを実施し、品質を確保します。
    *   Vercelなどへのデプロイ準備を進めます。
