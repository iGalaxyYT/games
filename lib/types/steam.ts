export interface SteamLibraryResponse {
	response: {
		game_count: number;
		games: {
			appid: number;
			name: string;
			playtime_2weeks: number;
			playtime_forever: number;
			img_icon_url: string;
			has_community_visible_stats: boolean;
			achievements: SteamAchievement[];
		}[];
	};
}

export interface SteamAchievement {
	apiname: string;
	achieved: 0;
	unlocktime: 0;
}
