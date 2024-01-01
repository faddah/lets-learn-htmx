/// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly MODE: string;
	readonly PROD: boolean;
	readonly DEV: boolean;
	readonly SPOTIFY_CLIENT_ID: string;
	readonly SPOTIFY_CLIENT_SECRET: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
