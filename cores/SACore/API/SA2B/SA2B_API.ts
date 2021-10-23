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

export interface ISaveContext {
	rings: number;
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