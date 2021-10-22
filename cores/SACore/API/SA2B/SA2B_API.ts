import { ICore } from 'modloader64_api/IModLoaderAPI';
import { IPosition } from '../Common/Utils/IPosition';
import { IRotation } from '../Common/Utils/IRotation';
import * as API from '../imports';

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

export const enum SonicStatus{
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

export const enum SonicAction
{
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
  
}
export interface ISA2BHelper {

}

export interface ISA2B extends ICore, API.Common.ISACommonCore {
    sonic: API.SA2B.ISonic;
    chao: API.ChaoAPI.IChaoGarden;
    save: API.SA2B.ISaveContext;
    helper: API.SA2B.ISA2BHelper;
    global: API.SA2B.IGlobalContext;
  }