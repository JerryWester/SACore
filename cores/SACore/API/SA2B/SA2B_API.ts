import { IFakeArray } from '../../src/Common/types/FakeArray';
import { ICore } from 'modloader64_api/IModLoaderAPI';
import { IPosition } from '../Common/Utils/IPosition';
import { IRotation } from '../Common/Utils/IRotation';
import * as API from '../imports';

export const enum GameStates {
	Inactive = 0,
	Loading = 1,
	LoadItems = 2,
	LoadLevel = 3,
	ReturnToMenu_1 = 4,
	ReloadCharacter = 5,
	ReturnToMenu_2 = 6,
	LoadFinished = 7,
	Exit_1 = 8,
	RestartLevel_NoLifeLost = 9,
	Exit_2 = 10,
	Exit_3 = 11,
	RestartLevel_1 = 12,
	NormalRestart = 13,
	NormalExit = 14,
	ReturnRing = 15,
	Ingame = 16,
	Pause = 17,
	MemoryCard = 18,
	GoToNextLevel = 19,
	state_14 = 20,
	state_15 = 21,
	state_16 = 22,
	state_17 = 23,
	state_18 = 24,
	state_19 = 25,
	state_1A = 26,
	state_1B = 27,
	state_1C = 28,
	state_1D = 29,
	state_1E = 30,
	state_1F = 31,
	state_20 = 32,
	state_21 = 33,
	state_22 = 34,
	state_23 = 35,
	state_24 = 36,
	state_25 = 37,
	state_26 = 38,
	state_27 = 39,
	state_28 = 40,
	state_29 = 41,
	state_2A = 42,
	state_2B = 43,
	state_2C = 44,
	state_2D = 45,
	state_2E = 46,
	state_2F = 47,
	state_30 = 48,
	state_31 = 49,
	state_32 = 50,
};

export const enum Menus
{
	TitleScreen = 0x0,
	Main = 0x1,
	StorySelect = 0x2,
	StageSelect = 0x3,
	Old2PBattle = 0x4,
	Unknown_5 = 0x5,
	Settings = 0x6,
	Unknown_7 = 0x7,
	SoundTest = 0x8,
	FileSelect = 0x9,
	Kart = 0xA,
	DownloadEventMaybe = 0xB,
	BossAttack = 0xC,
	Tutorial = 0xD,
	Unknown_E = 0xE,
	Emblems = 0xF,
	Battle = 0x10,
	Unknown_11 = 0x11,
	Unknown_12 = 0x12,
	Unknown_13 = 0x13,
	Unknown_14 = 0x14,
	Controls = 0x15,
	BonusVideo = 0x16,
	HowToPlay = 0x17,
	Unknown_18 = 0x18,
};

export const enum Levels {
	BasicTest,
	KnucklesTest,
	SonicTest,
	GreenForest,
	WhiteJungle,
	PumpkinHill,
	SkyRail,
	AquaticMine,
	SecurityHall,
	PrisonLane,
	MetalHarbor,
	IronGate,
	WeaponsBed,
	CityEscape,
	RadicalHighway,
	WeaponsBed2P,
	WildCanyon,
	MissionStreet,
	DryLagoon,
	SonicVsShadow1,
	TailsVsEggman1,
	SandOcean,
	CrazyGadget,
	HiddenBase,
	EternalEngine,
	DeathChamber,
	EggQuarters,
	LostColony,
	PyramidCave,
	TailsVsEggman2,
	FinalRush,
	GreenHill,
	MeteorHerd,
	KnucklesVsRouge,
	CannonsCoreS,
	CannonsCoreE,
	CannonsCoreT,
	CannonsCoreR,
	CannonsCoreK,
	MissionStreet2P,
	FinalChase,
	WildCanyon2P,
	SonicVsShadow2,
	CosmicWall,
	MadSpace,
	SandOcean2P,
	DryLagoon2P,
	PyramidRace,
	HiddenBase2P,
	PoolQuest,
	PlanetQuest,
	DeckRace,
	DowntownRace,
	CosmicWall2P,
	GrindRace,
	LostColony2P,
	EternalEngine2P,
	MetalHarbor2P,
	IronGate2P,
	DeathChamber2P,
	BigFoot,
	HotShot,
	FlyingDog,
	KingBoomBoo,
	EggGolemS,
	Biolizard,
	FinalHazard,
	EggGolemE,
	Route101280 = 70,
	KartRace,
	ChaoWorld = 90,
	Invalid
}

export interface IUpgrades {
	SonicLightShoes: boolean;
	SonicAncientLight: boolean;
	SonicMagicGloves: boolean;
	SonicFlameRing: boolean;
	SonicBounceBracelet: boolean;
	SonicMysticMelody: boolean;
	TailsBooster: boolean;
	TailsBazooka: boolean;
	TailsLaserBlaster: boolean;
	TailsMysticMelody: boolean;
	KnucklesShovelClaw: boolean;
	KnucklesSunglasses: boolean;
	KnucklesHammerGloves: boolean;
	KnucklesAirNecklace: boolean;
	KnucklesMysticMelody: boolean;
	SuperSonic: boolean;
	ShadowAirShoes: boolean;
	ShadowAncientLight: boolean;
	ShadowFlameRing: boolean;
	ShadowMysticMelody: boolean;
	EggmanJetEngine: boolean;
	EggmanLargeCannon: boolean;
	EggmanLaserBlaster: boolean;
	EggmanProtectiveArmor: boolean;
	EggmanMysticMelody: boolean;
	RougePickNails: boolean;
	RougeTreasureScope: boolean;
	RougeIronBoots: boolean;
	RougeMysticMelody: boolean;
}

export const enum SonicStatus {
	Ground,
	OnObjectColli,
	Hurt,
	ObjectInteract,
	Unknown2,
	Unknown3,
	Unknown4,
	Unknown5,
	Ball,
	LightDash,
	Attack,
	HoldObject,
	DoNextAction,
	OnPath,
	DisableControl,
	Unknown6
}

export const enum SonicAction {
	None,
	Run,
	SpinCharge = 3,
	SpinRelease,
	Jump = 6,
	HourglassSpring, // Also used for upside down spring in Crazy Gadget, and spring robots.
	Spring,
	Launch, // Used for the rocket in Metal Harbor and the vines in Green Forest/White Jungle
	Fall, // The panels that make you soar in Metal Harbor (black, blue, and red ones) use this, as well. Also pit floating.
	Balancing,
	Skid,
	HomingAttack,
	Push,
	Pain,
	WallBump,
	ObjectControl = 18,
	PickUp,
	PutDown,
	HoldObject,
	GrabObject, // Pushable/pullable boxes in Wild Canyon. Only set when facing toward the object.
	GrabObject2, // Only set when facing away from the object
	MoveWithObject = 25,
	SkidWithObject = 27,
	FallWithObject,
	JumpWithObject,
	PullObject = 32, // Boxes in Wild Canyon, like GrabObject
	Throw,
	ShakeObject = 35,
	Bound = 38, // Caught by ghost or blue shot from GUN robot
	StepUp = 40, // Stepping up to ledges
	Whistle = 42,
	Pet,
	MysticMelodyFail = 47,
	MonitorLook = 50,
	Pulley,
	Slide,
	MysticMelody,
	Sunglasses = MysticMelody,
	GhostScare = Sunglasses,
	AirBubble = GhostScare,
	Death = 57,
	Noclip, // Doesn't work for Knuckles.
	LightDash,
	Glide = LightDash,
	TailsFly = Glide,
	SuperStand = TailsFly,
	MechHover,
	LightAttack = MechHover,
	MechlessAttack = LightAttack,
	SuperMove = MechlessAttack,
	Somersault1,
	Dig = Somersault1,
	SuperMoveUp = Dig, // pressing A while standing still
	MechPunch,
	DigFinish = MechPunch,
	SuperMoveDown = DigFinish,
	Somersault2,
	SuperBoostUp = Somersault2, // pressing A while moving
	SomersaultFinish,
	SuperBoostDown = SomersaultFinish,
	DigOnWall,
	SomersaultCancel = DigOnWall,
	MovingSomersault1,
	DigFinishOnWall = MovingSomersault1,
	MovingSomersault2,
	DigFailOnWall,
	MovingSomersaultFinish = DigFailOnWall, // This pops up before SomersaultFinish if you somersault while moving. Kinda weird.
	BounceDown,
	Climb = BounceDown,
	BounceUp,
	ClimbUpLedge = BounceUp,
	Grind,
	Punch = Grind,
	Hang,
	Punch2 = Hang,
	Punch3,
	RailTrick = Punch3,
	MagicHands,
	Punch1Run = MagicHands,
	Trick,
	Punch2Run = Trick,
	Board,
	Punch3Run = Board,
	SpiralUpper,
	BoardBrake,
	DrillClaw = BoardBrake,
	BoardFall,
	Swim = BoardFall,
	BoardJump,
	SwimMove = BoardJump,
	BoardTrick,
	SwimSink = BoardTrick,
	BoardBump,
	GravitySwitch,
	TurtleDive = 86,
	TurtleGrab,
	BlackShield = TurtleGrab,
};

export interface ISonic {
	status: SonicStatus;
	action: SonicAction;
	upgrades: IUpgrades;
	position: IPosition;
	rotation: IRotation;
}

export interface ISaveBossInfo
{
	/* 0x00 */ time1: API.Common.ITime; // 0x3
	/* 0x03 */ field_3: Buffer; // 0x9
	/* 0x0C */ time2: API.Common.ITime; // 0x3
	/* 0x0F */ field_F: Buffer; // 0x9
	/* 0x18 */ time3: API.Common.ITime; // 0x3
	/* 0x1B */ field_1B: Buffer; // 0x91
	/* 0xAC */ emblem: number; // 0x1
};

export interface ISaveLevelScore
{
	/* 0x0 */ rings: number; // 0x2
	/* 0x2 */ field_2: number; // 0x2
	/* 0x4 */ score: number; // 0x4
	/* 0x8 */ time: API.Common.ITime; // 0x3
	/* 0xB */ field_B: number; // 0x1
};

export interface ISaveLevelInfo
{
	/* 0x00 */ ranks: number[]; // 6 * 0x1; 0x6
	/* 0x06 */ play_counts: number[]; // 5 * 0x2; 0xA
	/* 0x10 */ scores: ISaveLevelScore[]; // 15 * 0xC; 0xB4
};

export interface ISaveKartTime
{
	/* 0x0 */ time: API.Common.ITime; // 0x3
	/* 0x3 */ character: number; // 0x1
};

export interface ISaveKartInfo
{
	/* 0x0 */ times: ISaveKartTime[]; // 3 * 0x4; 0xC
	/* 0xC */ emblem: number; // 0x1
};

export interface ISaveContext {
	/* 0x0000 */ checksum: number; // 0x4
	/* 0x0004 */ dword_1DEC604: number; // 0x4
	/* 0x0008 */ anonymous_0: number; // 0x1
	/* 0x0009 */ anonymous_1: number; // 0x1
	/* 0x000A */ anonymous_2: number; // 0x1
	/* 0x000B */ anonymous_3: number; // 0x1
	/* 0x000C */ anonymous_4: number; // 0x1
	/* 0x000D */ anonymous_5: number; // 0x1
	/* 0x000E */ emblem_count: number; // 0x1
	/* 0x000F */ anonymous_6: number; // 0x1
	/* 0x0010 */ last_character: number; // 0x1
	/* 0x0011 */ last_level: number; // 0x1
	/* 0x0012 */ anonymous_9: number; // 0x1
	/* 0x0013 */ anonymous_10: number; // 0x1
	/* 0x0014 */ gap_14: Buffer; // 0x8
	/* 0x001C */ anonymous_11: number; // 0x2
	/* 0x001E */ anonymous_12: number; // 0x2
	/* 0x0020 */ anonymous_13: number; // 0x2
	/* 0x0022 */ anonymous_14: number; // 0x2
	/* 0x0024 */ dword_1DEC624: number; // 0x4
	/* 0x0028 */ dword_1DEC628: number; // 0x4
	/* 0x002C */ play_time: number; // 0x4
	/* 0x0030 */ total_rings: number; // 0x4
	/* 0x0034 */ dword_1DEC634: number; // 0x4
	/* 0x0038 */ levels: ISaveLevelInfo[]; // 62 * 0xC4; 0x2F78
	/* 0x2FB0 */ kart_race: ISaveKartInfo[]; // 3 * 0xD; 0x27
	/* 0x2FD7 */ anonymous_80: number; // 0x1
	/* 0x2FD8 */ anonymous_81: number; // 0x1
	/* 0x2FD9 */ gap_2fd9: Buffer; // 0x17
	/* 0x2FF0 */ hero_boss_attack: ISaveBossInfo; // 0xAD
	/* 0x309D */ gap_309d: Buffer; // 0x17
	/* 0x30B4 */ dark_boss_attack: ISaveBossInfo; // 0xAD
	/* 0x3161 */ gap_3161: Buffer; // 0x17
	/* 0x3178 */ all_boss_attack: ISaveBossInfo; // 0xAD
}

export interface IGlobalContext {
	global_frame_count: number;
	current_frame_count: number;
	game_paused: boolean;
	current_level: number;
	game_state: GameStates;
	current_menu: Menus;
}
export interface ISA2BHelper {
	isLevelNumberValid(): boolean;
	isPlayerEnteringLoadingZone(): boolean;
	isInGame(): boolean;
	isTitleScreen(): boolean;
	isMenuSafe(): boolean;
	isPaused(): boolean;
}


export interface ISA2BCore extends ICore, API.Common.ISACommonCore {
	sonic: API.SA2B.ISonic;
	chao: API.ChaoAPI.IChaoGarden;
	save: API.SA2B.ISaveContext;
	helper: API.SA2B.ISA2BHelper;
	global: API.SA2B.IGlobalContext;
}

export enum SA2BEvents {
	ON_LEVEL_CHANGE = 'onLevelChange',
	ON_LOADING_ZONE = 'onLoadingZone',
	ON_SAVE_LOADED = 'onSaveLoaded',
}