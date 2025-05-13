<!-- filepath: /workspace/docs/PRD.md -->
# Product Requirements Document (PRD)

## Project Overview
- **Project Name:** Project LeMonde
- **Document Version:** 0.0.2 <!-- Updated version -->
- **Author:** Masaru Yamagishi <m.yamagishi90+git@gmail.com>
- **Date:** 2025-05-13T00:00:00+09:00 <!-- Updated date -->

## 1. Objective
- **Purpose:** 誰もが作りたいものを誰かと一緒に作れる空間の提供
- **Goals:** ワールドワイドに同期可能な通信規格の定義とリファレンス実装が存在すること。ユーザーが創造活動を行い、他者と交流し、コンテンツを共有・所有できるオープンな3D空間を実現する。
- **Stakeholders:** クリエイター、プレイヤー、コンテンツ制作者、開発者コミュニティ、プラットフォーム運営者

## 2. Background
- **Problem Statement:** 現状、中央集権的なプラットフォームが多く、ユーザーが自由にコンテンツを創造し、所有権を明確に持ち、他者とシームレスに協調作業を行うためのオープンな分散型インフラが不足している。
- **Current Situation:** 既存のメタバースプラットフォームやゲーム作成ツールは存在するが、多くはクローズドなエコシステムであるか、分散型であっても機能が限定的である。
- **Related Documents:** (必要に応じて他のドキュメントへのリンクを追加)

## 3. Scope
- **In Scope:**
    - WebRTCベースのP2PおよびDe-centralized通信ネットワーク
    - Babylon.js を用いたリアルタイム3Dレンダリング空間
    - マルチプレイ機能 (ホラーゲーム、アクションゲームなど)
    - ユーザー生成コンテンツ (UGC) システム
    - CRDT (例: Yjs) をベースとしたリアルタイム共同編集ゲームエディタ
    - デジタル証明書の発行と管理 (ユーザーID、コンテンツ所有権)
    - ユーザー保持データ管理 (仮想通貨、アバター、アイテム、作成コンテンツ)
    - AIによる空間生成およびユーザーの創造活動支援
    - TypeScriptを中心としたオープンソースでのリファレンス実装
    - pnpmによるバージョン管理とワークスペース管理
    - ReactによるフロントエンドUI
- **Out of Scope (Initial MVP and near term):**
    - 高度な金融システム (複雑なDeFi連携など)
    - 現実世界と完全に同等な物理シミュレーション
    - 自律的に高度な意思決定を行う汎用AI NPC
    - 中央集権的な大規模ユーザーデータストレージ (初期は分散型にフォーカス)

## 4. Requirements
### 4.1 Functional Requirements
- **FR1:** ユーザーはWebRTCを介して他のユーザーとリアルタイムに音声、ビデオ、データ通信ができる。
- **FR2:** ユーザーはBabylon.jsでレンダリングされたインタラクティブな3D空間を体験し、操作できる。
- **FR3:** ユーザーは3D空間内でオブジェクト（プリミティブ、インポートモデル等）を生成、配置、変形、テクスチャリングできる (UGC)。
- **FR4:** 複数のユーザーがCRDTを利用して同じ3Dシーンやゲームロジック、アセットをリアルタイムに共同編集できるオンラインエディタ機能。
- **FR5:** ユーザーは自身のアイデンティティや作成したコンテンツの所有権を証明するデジタル証明書を発行・検証・管理できる。
- **FR6:** ユーザーは自身のアバター、所持アイテム、作成したコンテンツなどのデータを安全に保持・管理できる。
- **FR7:** AIがユーザーの指示やコンテキストに基づいて3Dオブジェクトや環境を提案・生成したり、編集作業を補助したりできる。
- **FR8:** システムはオープンなプロトコルに基づいて構築され、第三者が独自にクライアントやサーバー、サービスを開発・接続できる。

### 4.2 Non-Functional Requirements
- **Performance:** ワールドワイドで低遅延な同期を実現し、少なくとも数十人規模のユーザーが同一空間で快適にインタラクションできる。
- **Security:** ユーザー認証、通信の暗号化、デジタルアセットの所有権保護を確実に行う。
- **Usability:** プログラミングや3Dモデリングの専門知識がないユーザーでも、直感的にコンテンツを創造し、他者と交流できるインターフェースを提供する。
- **Scalability:** 将来的に数百万ユーザー規模の利用に対応できるよう、アーキテクチャを設計する。
- **Openness:** プロトコル、主要なエディタ実装、リファレンス実装はオープンソース (MITライセンス等を想定) として公開し、コミュニティによる開発と貢献を促進する。
- **Interoperability:** 標準的なデータフォーマット (glTFなど) をサポートし、他のツールやプラットフォームとの連携を考慮する。
- **Decentralization:** コアな通信とデータ管理は、可能な限り分散型のアプローチを採用し、単一障害点や中央集権的なコントロールを避ける。

## 5. User Stories
- **US1:** 開発者として、私はリアルタイムで共同編集可能なゲームエディタを使って、友人と一緒に新しい3Dゲームを開発し、その場でテストプレイしたい。
- **US2:** ゲーマーとして、私は他のプレイヤーが作ったユニークなホラーゲームやアクションゲームを、友達と一緒にオンラインでプレイし、その体験を共有したい。
- **US3:** 3Dアーティストとして、私は自分が作成したアバターやアイテムの所有権をデジタル証明書で管理し、それをプラットフォーム内で安全に販売・交換したい。
- **US4:** コミュニティユーザーとして、私はTwitterのように気軽に自分の考えや作成した小さな3D作品を投稿し、他のユーザーと交流できるオープンな3D空間が欲しい。
- **US5:** YouTuber/ストリーマーとして、私は視聴者と一緒にリアルタイムで遊べるインタラクティブなイベント（例: 視聴者参加型ゲーム、共同建築）をこのプラットフォーム上で開催し、その様子を配信したい。
- **US6:** AIとして、私はユーザーがより簡単に魅力的な3D空間を構築できるよう、デザインの提案や自動生成機能を提供したい。

## 6. Assumptions
- **Assumption 1:** WebRTCおよび関連技術は、大規模なリアルタイム同期通信の基盤として十分に機能する。
- **Assumption 2:** CRDTは、複雑なコンフリクト解消なしに、複数ユーザーによるリアルタイム共同編集を実現する上で効果的である。
- **Assumption 3:** オープンソースコミュニティが本プロジェクトに関心を持ち、開発に貢献してくれる。
- **Assumption 4:** ユーザーは分散型のシステムやデジタル所有権の概念を受け入れ、活用する意欲がある。

## 7. Constraints
- **Constraint 1:** 開発リソース（人員、時間、予算）は有限である。
- **Constraint 2:** 初期段階では、既存のオープンソース技術やライブラリを最大限に活用する。
- **Constraint 3:** プロジェクトの性質上、セキュリティとプライバシー保護には特に注意を払う必要がある。

## 8. Dependencies
- **Dependency 1:** Babylon.js (3Dレンダリングエンジン)
- **Dependency 2:** Yjs または類似のCRDTライブラリ (共同編集基盤)
- **Dependency 3:** React (フロントエンドUIライブラリ)
- **Dependency 4:** WebRTC (通信プロトコル)
- **Dependency 5:** TypeScript (主要開発言語)
- **Dependency 6:** pnpm (パッケージ管理、ワークスペース管理)
- **Dependency 7:** Vite (ビルドツール)

## 9. Acceptance Criteria
- **Criteria 1:** MVPとして定義されたコア機能がすべて実装され、安定して動作する。
- **Criteria 2:** 複数のユーザーが同時に接続し、リアルタイムで3D空間内のオブジェクトを共同編集できる。
- **Criteria 3:** 主要な機能について、ユーザビリティテストで肯定的なフィードバックが得られる。
- **Criteria 4:** オープンソースとして公開されたリポジトリが、開発者コミュニティにとって理解しやすく、貢献しやすい状態になっている。

## 10. Timeline
- **Milestone 1 (MVP Definition & Prototyping):** [Date - e.g., 2025-Q3]
    - 詳細なMVP要件定義の完了
    - コア技術（WebRTC同期、CRDT編集、Babylon.js描画）の基本プロトタイプ開発
- **Milestone 2 (MVP Alpha Release):** [Date - e.g., 2025-Q4]
    - MVPの主要機能実装完了
    - 内部テストおよび限定的なユーザーテスト開始
- **Milestone 3 (MVP Beta Release & Community Building):** [Date - e.g., 2026-Q1]
    - ベータ版リリース、公開テスト
    - ドキュメント整備、開発者コミュニティへの発信開始
- **Milestone 4 (Official Release v1.0):** [Date - e.g., 2026-Q2/Q3]
    - 正式版リリース
    - UGC機能、AIサポート機能の初期実装

## 11. Minimum Viable Product (MVP)
### 11.1 MVP Core Features
- **Basic P2P Communication:** WebRTC を用いた複数ユーザー（3～5人程度を想定）間の基本的なデータチャネル確立と状態同期。
- **Simple 3D Space Rendering:** Babylon.js による共有3D空間の描画。空間には基本的な床とライティングが含まれる。
- **Real-time Collaborative Object Manipulation (CRDT-based):**
    - Yjs (または同等のCRDTライブラリ) を利用。
    - 複数ユーザーによる3D空間内のプリミティブオブジェクト（例: キューブ、スフィア）のリアルタイム同時生成、移動、回転、拡縮編集機能。
    - 編集内容は全参加者に即座に反映される。
- **Basic User Interface:**
    - 3D空間内をナビゲートするカメラコントロール。
    - オブジェクトを選択し、基本的な操作（移動、回転、スケール）を行うためのシンプルなUI。
    - 接続しているユーザーリストの表示（任意）。
- **Minimal Persistence (Optional for MVP, Local Storage based if included):** 編集されたシーンの状態をローカルストレージに保存・復元する機能（サーバーサイド永続化はMVP以降）。

### 11.2 Technology Stack for MVP
- **Communication Protocol:** WebRTC (using a library like `simple-peer` or a `yjs-webrtc` provider)
- **3D Rendering Engine:** Babylon.js
- **Collaborative Editing Framework:** Yjs (with a suitable connector for WebRTC)
- **Frontend UI Library:** React
- **Primary Language:** TypeScript
- **Build Tool / Dev Server:** Vite
- **Package Manager / Workspace:** pnpm
- **Version Control:** Git (on GitHub, as per repository context)

### 11.3 Goal of MVP
- ユーザーが共有された3D空間に同時接続し、基本的なオブジェクトをリアルタイムで共同編集できることを実証する。
- コアとなる技術（WebRTCによるP2P同期、CRDTによるコンフリクトフリーなデータ編集、Babylon.jsによる3D描画）の組み合わせが機能することを検証する。
- 今後の開発の基盤となる、最小限の動作するプロダクトを提供する。
- このMVPを通じて、初期のユーザーフィードバックを得る（開発チーム内やごく一部のテスターを想定）。

## 12. Appendix
- **Glossary:**
    - **WebRTC:** Web Real-Time Communication
    - **CRDT:** Conflict-free Replicated Data Type
    - **UGC:** User-Generated Content
    - **P2P:** Peer-to-Peer
    - **MVP:** Minimum Viable Product
- **References:**
    - Babylon.js: https://www.babylonjs.com/
    - Yjs: https://yjs.dev/
    - WebRTC: https://webrtc.org/
    - React: https://react.dev/
    - TypeScript: https://www.typescriptlang.org/
    - pnpm: https://pnpm.io/
    - Vite: https://vitejs.dev/
- **Document History:**
    - v0.0.1 (2025-03-22): Initial draft by Masaru Yamagishi.
    - v0.0.2 (2025-05-13): Updated based on detailed requirements, added MVP definition.
