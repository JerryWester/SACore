import { current_game } from '../../SACore';
import { JSONTemplate } from 'modloader64_api/JSONTemplate';
import { ChaoAPI, ChaoString } from '../../../API/imports';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import IMemory from 'modloader64_api/IMemory';
import { ClassroomLessonFlags, SA2BAnimalFlags, SADXAnimalFlags, ToyFlags } from './ChaoFlags';
import { SA2BCharacterBonds, SADXCharacterBonds } from './ChaoCharBonds';
import { ChaoDNA } from './ChaoDNA';
import { SupportedGames } from '../types/GameAliases';

export class ChaoData extends JSONTemplate implements ChaoAPI.IChaoData {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private slot: number;
    private chao_data = function() { return 0; };
    get pointer() { return this.chao_data() + (this.slot * 0x800) }
    private get gap_000_addr() { return this.chao_data() + (this.slot * 0x800) + 0x000; }
    private get name_addr() { return this.chao_data() + (this.slot * 0x800) + 0x012; }
    private get gap_019_addr() { return this.chao_data() + (this.slot * 0x800) + 0x019; }
    private get swim_fraction_addr() { return this.chao_data() + (this.slot * 0x800) + 0x020; }
    private get fly_fraction_addr() { return this.chao_data() + (this.slot * 0x800) + 0x021; }
    private get run_fraction_addr() { return this.chao_data() + (this.slot * 0x800) + 0x022; }
    private get power_fraction_addr() { return this.chao_data() + (this.slot * 0x800) + 0x023; }
    private get stamina_fraction_addr() { return this.chao_data() + (this.slot * 0x800) + 0x024; }
    private get lucky_fraction_addr() { return this.chao_data() + (this.slot * 0x800) + 0x025; }
    private get intelligence_fraction_addr() { return this.chao_data() + (this.slot * 0x800) + 0x026; }
    private get unknown_fraction_addr() { return this.chao_data() + (this.slot * 0x800) + 0x027; }
    private get swim_grade_addr() { return this.chao_data() + (this.slot * 0x800) + 0x028; }
    private get fly_grade_addr() { return this.chao_data() + (this.slot * 0x800) + 0x029; }
    private get run_grade_addr() { return this.chao_data() + (this.slot * 0x800) + 0x02A; }
    private get power_grade_addr() { return this.chao_data() + (this.slot * 0x800) + 0x02B; }
    private get stamina_grade_addr() { return this.chao_data() + (this.slot * 0x800) + 0x02C; }
    private get lucky_grade_addr() { return this.chao_data() + (this.slot * 0x800) + 0x02D; }
    private get intelligence_grade_addr() { return this.chao_data() + (this.slot * 0x800) + 0x02E; }
    private get unknown_grade_addr() { return this.chao_data() + (this.slot * 0x800) + 0x02F; }
    private get swim_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x030; }
    private get fly_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x031; }
    private get run_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x032; }
    private get power_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x033; }
    private get stamina_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x034; }
    private get luck_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x035; }
    private get intelligence_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x036; }
    private get unknown_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x037; }
    private get swim_stat_addr() { return this.chao_data() + (this.slot * 0x800) + 0x038; }
    private get fly_stat_addr() { return this.chao_data() + (this.slot * 0x800) + 0x03A; }
    private get run_stat_addr() { return this.chao_data() + (this.slot * 0x800) + 0x03C; }
    private get power_stat_addr() { return this.chao_data() + (this.slot * 0x800) + 0x03E; }
    private get stamina_stat_addr() { return this.chao_data() + (this.slot * 0x800) + 0x040; }
    private get luck_stat_addr() { return this.chao_data() + (this.slot * 0x800) + 0x042; }
    private get intelligence_stat_addr() { return this.chao_data() + (this.slot * 0x800) + 0x044; }
    private get unknown_stat_addr() { return this.chao_data() + (this.slot * 0x800) + 0x045; }
    private get field_046_addr() { return this.chao_data() + (this.slot * 0x800) + 0x046; }
    private get type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x080; }
    private get garden_addr() { return this.chao_data() + (this.slot * 0x800) + 0x081; }
    private get happiness_addr() { return this.chao_data() + (this.slot * 0x800) + 0x082; }
    private get field_084_addr() { return this.chao_data() + (this.slot * 0x800) + 0x084; }
    private get clock_rollovers_addr() { return this.chao_data() + (this.slot * 0x800) + 0x086; }
    private get field_088_addr() { return this.chao_data() + (this.slot * 0x800) + 0x088; }
    private get lifespan_addr() { return this.chao_data() + (this.slot * 0x800) + 0x08A; }
    private get lifespan2_addr() { return this.chao_data() + (this.slot * 0x800) + 0x08C; }
    private get reincarnations_addr() { return this.chao_data() + (this.slot * 0x800) + 0x08E; }
    private get field_090_addr() { return this.chao_data() + (this.slot * 0x800) + 0x090; }
    private get power_run_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0A8; }
    private get fly_swim_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0AC; }
    private get alignment_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0B0; }
    private get gap_0B4_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0B4; }
    private get evolution_progress_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0C0; }
    private get gap_0C4_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0C4; }
    private get eye_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0D1; }
    private get mouth_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0D2; }
    private get ball_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0D3; }
    private get gap_0D4_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0D4; }
    private get headgear_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0D5; }
    private get hide_feet_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0D6; }
    private get medal_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0D7; }
    private get color_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0D8; }
    private get monotone_highlights_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0D9; }
    private get texture_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0DA; }
    private get shiny_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0DB; }
    private get egg_color_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0DC; }
    private get body_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0DD; }
    private get body_type_animal_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0DE; }
    private get field_0DF_addr() { return this.chao_data() + (this.slot * 0x800) + 0x0DF; }
    private get sa2b_arm_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x11C; }
    private get sa2b_ear_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x11D; }
    private get sa2b_forehead_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x11E; }
    private get sa2b_horn_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x11F; }
    private get sa2b_leg_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x120; }
    private get sa2b_tail_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x121; }
    private get sa2b_wing_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x122; }
    private get sa2b_face_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x123; }
    private get field_124_addr() { return this.chao_data() + (this.slot * 0x800) + 0x124; }
    private get joy_addr() { return this.chao_data() + (this.slot * 0x800) + 0x12C; }
    private get field_12D_addr() { return this.chao_data() + (this.slot * 0x800) + 0x12D; }
    private get urge_to_cry_addr() { return this.chao_data() + (this.slot * 0x800) + 0x12E; }
    private get fear_addr() { return this.chao_data() + (this.slot * 0x800) + 0x12F; }
    private get field_130_addr() { return this.chao_data() + (this.slot * 0x800) + 0x130; }
    private get dizziness_addr() { return this.chao_data() + (this.slot * 0x800) + 0x131; }
    private get field_132_addr() { return this.chao_data() + (this.slot * 0x800) + 0x132; }
    private get sleepiness_addr() { return this.chao_data() + (this.slot * 0x800) + 0x134; }
    private get tiredness_addr() { return this.chao_data() + (this.slot * 0x800) + 0x136; }
    private get hunger_addr() { return this.chao_data() + (this.slot * 0x800) + 0x138; }
    private get mate_desire_addr() { return this.chao_data() + (this.slot * 0x800) + 0x13A; }
    private get boredom_addr() { return this.chao_data() + (this.slot * 0x800) + 0x13C; }
    private get field_13E_addr() { return this.chao_data() + (this.slot * 0x800) + 0x13E; }
    private get energy_addr() { return this.chao_data() + (this.slot * 0x800) + 0x148; }
    private get normal_curiosity_addr() { return this.chao_data() + (this.slot * 0x800) + 0x14A; }
    private get field_14B_addr() { return this.chao_data() + (this.slot * 0x800) + 0x14B; }
    private get cry_baby_energetic_addr() { return this.chao_data() + (this.slot * 0x800) + 0x14C; }
    private get naive_normal_addr() { return this.chao_data() + (this.slot * 0x800) + 0x14D; }
    private get field_14E_addr() { return this.chao_data() + (this.slot * 0x800) + 0x14E; }
    private get normal_bigeater_addr() { return this.chao_data() + (this.slot * 0x800) + 0x150; }
    private get field_151_addr() { return this.chao_data() + (this.slot * 0x800) + 0x151; }
    private get normal_carefree_addr() { return this.chao_data() + (this.slot * 0x800) + 0x155; }
    private get field_156_addr() { return this.chao_data() + (this.slot * 0x800) + 0x156; }
    private get favorite_fruit_addr() { return this.chao_data() + (this.slot * 0x800) + 0x157; }
    private get field_158_addr() { return this.chao_data() + (this.slot * 0x800) + 0x158; }
    private get cough_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x15A; }
    private get cold_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x15B; }
    private get rash_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x15C; }
    private get runny_nose_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x15D; }
    private get hiccups_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x15E; }
    private get stomach_ache_level_addr() { return this.chao_data() + (this.slot * 0x800) + 0x15F; }
    private get field_166_addr() { return this.chao_data() + (this.slot * 0x800) + 0x166; }
    private get field_190_addr() { return this.chao_data() + (this.slot * 0x800) + 0x190; }
    private get field_4DC_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4DC; }
    private get arm_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4E4; }
    private get ear_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4E5; }
    private get eyebrow_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4E6; }
    private get forehead_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4E7; }
    private get leg_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4E8; }
    private get tail_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4E9; }
    private get wing_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4EA; }
    private get unknown_type_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4EB; }
    private get field_4EC_addr() { return this.chao_data() + (this.slot * 0x800) + 0x4EC; }

    sadx_animal_behaviors: ChaoAPI.ISADXAnimalFlags;
    sa2_animal_behaviors: ChaoAPI.ISA2BAnimalFlags;
    sa2b_skills: ChaoAPI.IClassroomLessonFlags;
    sa2b_toys: ChaoAPI.IToyFlags;
    sadx_character_bonds: ChaoAPI.ISADXCharacterBonds;
    sa2b_character_bonds: ChaoAPI.ISA2BCharacterBonds;
    dna: ChaoAPI.IChaoDNA;

    constructor(ModLoader: IModLoaderAPI, log: ILogger, chao_data_func: () => number, slot: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.slot = slot;
        this.chao_data = chao_data_func;
        this.sadx_animal_behaviors = new SADXAnimalFlags(ModLoader, log, slot);
        this.sa2_animal_behaviors = new SA2BAnimalFlags(ModLoader, log, slot);
        this.sa2b_skills = new ClassroomLessonFlags(ModLoader, log, slot);
        this.sa2b_toys = new ToyFlags(ModLoader, log, slot);
        this.sadx_character_bonds = new SADXCharacterBonds(ModLoader, log, slot);
        this.sa2b_character_bonds = new SA2BCharacterBonds(ModLoader, log, slot);
        this.dna = new ChaoDNA(ModLoader, log, slot);
    }

    jsonFields: string[] = [
        'pointer',
        'raw',
        'name',
        'sadx_animal_behaviors',
        'sa2_animal_behaviors',
        'sa2b_skills',
        'sa2b_toys',
        'sadx_character_bonds',
        'sa2b_character_bonds',
        'dna',
        'swim_fraction',
        'fly_fraction',
        'run_fraction',
        'power_fraction',
        'stamina_fraction',
        'lucky_fraction',
        'intelligence_fraction',
        'unknown_fraction',
        'swim_grade',
        'fly_grade',
        'run_grade',
        'power_grade',
        'stamina_grade',
        'lucky_grade',
        'intelligence_grade',
        'unknown_grade',
        'swim_level',
        'fly_level',
        'run_level',
        'power_level',
        'stamina_level',
        'luck_level',
        'intelligence_level',
        'unknown_level',
        'intelligence_stat',
        'unknown_stat',
        'type',
        'garden',
        'eye_type',
        'mouth_type',
        'ball_type',
        'headgear',
        'hide_feet',
        'medal',
        'color',
        'monotone_highlights',
        'texture',
        'shiny',
        'egg_color',
        'body_type',
        'body_type_animal',
        'sa2b_arm_type',
        'sa2b_ear_type',
        'sa2b_forehead_type',
        'sa2b_horn_type',
        'sa2b_leg_type',
        'sa2b_tail_type',
        'sa2b_wing_type',
        'sa2b_face_type',
        'joy',
        'urge_to_cry',
        'fear',
        'dizziness',
        'normal_curiosity',
        'cry_baby_energetic',
        'naive_normal',
        'normal_bigeater',
        'normal_carefree',
        'favorite_fruit',
        'cough_level',
        'cold_level',
        'rash_level',
        'runny_nose_level',
        'hiccups_level',
        'stomach_ache_level',
        'arm_type',
        'ear_type',
        'eyebrow_type',
        'forehead_type',
        'leg_type',
        'tail_type',
        'wing_type',
        'unknown_type',
        'swim_stat',
        'fly_stat',
        'run_stat',
        'power_stat',
        'stamina_stat',
        'luck_stat',
        'happiness',
        'clock_rollovers',
        'lifespan',
        'lifespan2',
        'reincarnations',
        'sleepiness',
        'tiredness',
        'hunger',
        'mate_desire',
        'boredom',
        'energy',
        'power_run',
        'fly_swim',
        'alignment',
        'evolution_progress',
        'gap_000',
        'gap_019',
        'field_046',
        'field_084',
        'field_088',
        'field_090',
        'gap_0B4',
        'gap_0C4',
        'gap_0D4',
        'field_0DF',
        'field_124',
        'field_12D',
        'field_130',
        'field_132',
        'field_13E',
        'field_14B',
        'field_14E',
        'field_151',
        'field_156',
        'field_158',
        'field_166',
        'field_190',
        'field_4DC',
        'field_4EC'
    ];

    get raw() { return this.emulator.rdramReadBuffer(this.chao_data() + (0x800 * this.slot), 0x800); }
    set raw(buf: Buffer) { this.emulator.rdramWriteBuffer(this.chao_data() + (0x800 * this.slot), buf); }

    get name() { return ChaoString.decode(this.emulator.rdramReadBuffer(this.name_addr, 0x7)); }
    set name(str: string) { this.emulator.rdramWriteBuffer(this.name_addr, ChaoString.encode(str)); }

    // chars
    get swim_fraction() { return this.emulator.rdramRead8(this.swim_fraction_addr); }
    get fly_fraction() { return this.emulator.rdramRead8(this.fly_fraction_addr); }
    get run_fraction() { return this.emulator.rdramRead8(this.run_fraction_addr); }
    get power_fraction() { return this.emulator.rdramRead8(this.power_fraction_addr); }
    get stamina_fraction() { return this.emulator.rdramRead8(this.stamina_fraction_addr); }
    get lucky_fraction() { return this.emulator.rdramRead8(this.lucky_fraction_addr); }
    get intelligence_fraction() { return this.emulator.rdramRead8(this.intelligence_fraction_addr); }
    get unknown_fraction() { return this.emulator.rdramRead8(this.unknown_fraction_addr); }
    get swim_grade() { return this.emulator.rdramRead8(this.swim_grade_addr); }
    get fly_grade() { return this.emulator.rdramRead8(this.fly_grade_addr); }
    get run_grade() { return this.emulator.rdramRead8(this.run_grade_addr); }
    get power_grade() { return this.emulator.rdramRead8(this.power_grade_addr); }
    get stamina_grade() { return this.emulator.rdramRead8(this.stamina_grade_addr); }
    get lucky_grade() { return this.emulator.rdramRead8(this.lucky_grade_addr); }
    get intelligence_grade() { return this.emulator.rdramRead8(this.intelligence_grade_addr); }
    get unknown_grade() { return this.emulator.rdramRead8(this.unknown_grade_addr); }
    get swim_level() { return this.emulator.rdramRead8(this.swim_level_addr); }
    get fly_level() { return this.emulator.rdramRead8(this.fly_level_addr); }
    get run_level() { return this.emulator.rdramRead8(this.run_level_addr); }
    get power_level() { return this.emulator.rdramRead8(this.power_level_addr); }
    get stamina_level() { return this.emulator.rdramRead8(this.stamina_level_addr); }
    get luck_level() { return this.emulator.rdramRead8(this.luck_level_addr); }
    get intelligence_level() { return this.emulator.rdramRead8(this.intelligence_level_addr); }
    get unknown_level() { return this.emulator.rdramRead8(this.unknown_level_addr); }
    get intelligence_stat() { return this.emulator.rdramRead8(this.intelligence_stat_addr); }
    get unknown_stat() { return this.emulator.rdramRead8(this.unknown_stat_addr); }
    get type() { return this.emulator.rdramRead8(this.type_addr); }
    get garden() { return this.emulator.rdramRead8(this.garden_addr); }
    get eye_type() { return this.emulator.rdramRead8(this.eye_type_addr); }
    get mouth_type() { return this.emulator.rdramRead8(this.mouth_type_addr); }
    get ball_type() { return this.emulator.rdramRead8(this.ball_type_addr); }
    get headgear() { return this.emulator.rdramRead8(this.headgear_addr); }
    get hide_feet() { return this.emulator.rdramRead8(this.hide_feet_addr) !== 0; }
    get medal() { return this.emulator.rdramRead8(this.medal_addr); }
    get color() { return this.emulator.rdramRead8(this.color_addr); }
    get monotone_highlights() { return this.emulator.rdramRead8(this.monotone_highlights_addr) !== 0; }
    get texture() { return this.emulator.rdramRead8(this.texture_addr); }
    get shiny() { return this.emulator.rdramRead8(this.shiny_addr) !== 0; }
    get egg_color() { return this.emulator.rdramRead8(this.egg_color_addr); }
    get body_type() { return this.emulator.rdramRead8(this.body_type_addr); }
    get body_type_animal() { return this.emulator.rdramRead8(this.body_type_animal_addr); }
    get sa2b_arm_type() { return this.emulator.rdramRead8(this.sa2b_arm_type_addr); }
    get sa2b_ear_type() { return this.emulator.rdramRead8(this.sa2b_ear_type_addr); }
    get sa2b_forehead_type() { return this.emulator.rdramRead8(this.sa2b_forehead_type_addr); }
    get sa2b_horn_type() { return this.emulator.rdramRead8(this.sa2b_horn_type_addr); }
    get sa2b_leg_type() { return this.emulator.rdramRead8(this.sa2b_leg_type_addr); }
    get sa2b_tail_type() { return this.emulator.rdramRead8(this.sa2b_tail_type_addr); }
    get sa2b_wing_type() { return this.emulator.rdramRead8(this.sa2b_wing_type_addr); }
    get sa2b_face_type() { return this.emulator.rdramRead8(this.sa2b_face_type_addr); }
    get joy() { return this.emulator.rdramRead8(this.joy_addr); }
    get urge_to_cry() { return this.emulator.rdramRead8(this.urge_to_cry_addr); }
    get fear() { return this.emulator.rdramRead8(this.fear_addr); }
    get dizziness() { return this.emulator.rdramRead8(this.dizziness_addr); }
    get normal_curiosity() { return this.emulator.rdramReadS8(this.normal_curiosity_addr); }
    get cry_baby_energetic() { return this.emulator.rdramReadS8(this.cry_baby_energetic_addr); }
    get naive_normal() { return this.emulator.rdramReadS8(this.naive_normal_addr); }
    get normal_bigeater() { return this.emulator.rdramReadS8(this.normal_bigeater_addr); }
    get normal_carefree() { return this.emulator.rdramReadS8(this.normal_carefree_addr); }
    get favorite_fruit() { return this.emulator.rdramRead8(this.favorite_fruit_addr); }
    get cough_level() { return this.emulator.rdramReadS8(this.cough_level_addr); }
    get cold_level() { return this.emulator.rdramReadS8(this.cold_level_addr); }
    get rash_level() { return this.emulator.rdramReadS8(this.rash_level_addr); }
    get runny_nose_level() { return this.emulator.rdramReadS8(this.runny_nose_level_addr); }
    get hiccups_level() { return this.emulator.rdramReadS8(this.hiccups_level_addr); }
    get stomach_ache_level() { return this.emulator.rdramReadS8(this.stomach_ache_level_addr); }
    get arm_type() { return this.emulator.rdramRead8(this.arm_type_addr); }
    get ear_type() { return this.emulator.rdramRead8(this.ear_type_addr); }
    get eyebrow_type() { return this.emulator.rdramRead8(this.eyebrow_type_addr); }
    get forehead_type() { return this.emulator.rdramRead8(this.forehead_type_addr); }
    get leg_type() { return this.emulator.rdramRead8(this.leg_type_addr); }
    get tail_type() { return this.emulator.rdramRead8(this.tail_type_addr); }
    get wing_type() { return this.emulator.rdramRead8(this.wing_type_addr); }
    get unknown_type() { return this.emulator.rdramRead8(this.unknown_type_addr); }

    set swim_fraction(num: number) { this.emulator.rdramWrite8(this.swim_fraction_addr, num); }
    set fly_fraction(num: number) { this.emulator.rdramWrite8(this.fly_fraction_addr, num); }
    set run_fraction(num: number) { this.emulator.rdramWrite8(this.run_fraction_addr, num); }
    set power_fraction(num: number) { this.emulator.rdramWrite8(this.power_fraction_addr, num); }
    set stamina_fraction(num: number) { this.emulator.rdramWrite8(this.stamina_fraction_addr, num); }
    set lucky_fraction(num: number) { this.emulator.rdramWrite8(this.lucky_fraction_addr, num); }
    set intelligence_fraction(num: number) { this.emulator.rdramWrite8(this.intelligence_fraction_addr, num); }
    set unknown_fraction(num: number) { this.emulator.rdramWrite8(this.unknown_fraction_addr, num); }
    set swim_grade(num: number) { this.emulator.rdramWrite8(this.swim_grade_addr, num); }
    set fly_grade(num: number) { this.emulator.rdramWrite8(this.fly_grade_addr, num); }
    set run_grade(num: number) { this.emulator.rdramWrite8(this.run_grade_addr, num); }
    set power_grade(num: number) { this.emulator.rdramWrite8(this.power_grade_addr, num); }
    set stamina_grade(num: number) { this.emulator.rdramWrite8(this.stamina_grade_addr, num); }
    set lucky_grade(num: number) { this.emulator.rdramWrite8(this.lucky_grade_addr, num); }
    set intelligence_grade(num: number) { this.emulator.rdramWrite8(this.intelligence_grade_addr, num); }
    set unknown_grade(num: number) { this.emulator.rdramWrite8(this.unknown_grade_addr, num); }
    set swim_level(num: number) { this.emulator.rdramWrite8(this.swim_level_addr, num); }
    set fly_level(num: number) { this.emulator.rdramWrite8(this.fly_level_addr, num); }
    set run_level(num: number) { this.emulator.rdramWrite8(this.run_level_addr, num); }
    set power_level(num: number) { this.emulator.rdramWrite8(this.power_level_addr, num); }
    set stamina_level(num: number) { this.emulator.rdramWrite8(this.stamina_level_addr, num); }
    set luck_level(num: number) { this.emulator.rdramWrite8(this.luck_level_addr, num); }
    set intelligence_level(num: number) { this.emulator.rdramWrite8(this.intelligence_level_addr, num); }
    set unknown_level(num: number) { this.emulator.rdramWrite8(this.unknown_level_addr, num); }
    set intelligence_stat(num: number) { this.emulator.rdramWrite8(this.intelligence_stat_addr, num); }
    set unknown_stat(num: number) { this.emulator.rdramWrite8(this.unknown_stat_addr, num); }
    set type(num: number) { this.emulator.rdramWrite8(this.type_addr, num); }
    set garden(num: number) { this.emulator.rdramWrite8(this.garden_addr, num); }
    set eye_type(num: number) { this.emulator.rdramWrite8(this.eye_type_addr, num); }
    set mouth_type(num: number) { this.emulator.rdramWrite8(this.mouth_type_addr, num); }
    set ball_type(num: number) { this.emulator.rdramWrite8(this.ball_type_addr, num); }
    set headgear(num: number) { this.emulator.rdramWrite8(this.headgear_addr, num); }
    set hide_feet(flag: boolean) { this.emulator.rdramWrite8(this.hide_feet_addr, flag ? 1 : 0); }
    set medal(num: number) { this.emulator.rdramWrite8(this.medal_addr, num); }
    set color(num: number) { this.emulator.rdramWrite8(this.color_addr, num); }
    set monotone_highlights(flag: boolean) { this.emulator.rdramWrite8(this.monotone_highlights_addr, flag ? 1 : 0); }
    set texture(num: number) { this.emulator.rdramWrite8(this.texture_addr, num); }
    set shiny(flag: boolean) { this.emulator.rdramWrite8(this.shiny_addr, flag ? 1 : 0); }
    set egg_color(num: number) { this.emulator.rdramWrite8(this.egg_color_addr, num); }
    set body_type(num: number) { this.emulator.rdramWrite8(this.body_type_addr, num); }
    set body_type_animal(num: number) { this.emulator.rdramWrite8(this.body_type_animal_addr, num); }
    set sa2b_arm_type(num: number) { this.emulator.rdramWrite8(this.sa2b_arm_type_addr, num); }
    set sa2b_ear_type(num: number) { this.emulator.rdramWrite8(this.sa2b_ear_type_addr, num); }
    set sa2b_forehead_type(num: number) { this.emulator.rdramWrite8(this.sa2b_forehead_type_addr, num); }
    set sa2b_horn_type(num: number) { this.emulator.rdramWrite8(this.sa2b_horn_type_addr, num); }
    set sa2b_leg_type(num: number) { this.emulator.rdramWrite8(this.sa2b_leg_type_addr, num); }
    set sa2b_tail_type(num: number) { this.emulator.rdramWrite8(this.sa2b_tail_type_addr, num); }
    set sa2b_wing_type(num: number) { this.emulator.rdramWrite8(this.sa2b_wing_type_addr, num); }
    set sa2b_face_type(num: number) { this.emulator.rdramWrite8(this.sa2b_face_type_addr, num); }
    set joy(num: number) { this.emulator.rdramWrite8(this.joy_addr, num); }
    set urge_to_cry(num: number) { this.emulator.rdramWrite8(this.urge_to_cry_addr, num); }
    set fear(num: number) { this.emulator.rdramWrite8(this.fear_addr, num); }
    set dizziness(num: number) { this.emulator.rdramWrite8(this.dizziness_addr, num); }
    set normal_curiosity(num: number) { this.emulator.rdramWrite8(this.normal_curiosity_addr, num); }
    set cry_baby_energetic(num: number) { this.emulator.rdramWrite8(this.cry_baby_energetic_addr, num); }
    set naive_normal(num: number) { this.emulator.rdramWrite8(this.naive_normal_addr, num); }
    set normal_bigeater(num: number) { this.emulator.rdramWrite8(this.normal_bigeater_addr, num); }
    set normal_carefree(num: number) { this.emulator.rdramWrite8(this.normal_carefree_addr, num); }
    set favorite_fruit(num: number) { this.emulator.rdramWrite8(this.favorite_fruit_addr, num); }
    set cough_level(num: number) { this.emulator.rdramWrite8(this.cough_level_addr, num); }
    set cold_level(num: number) { this.emulator.rdramWrite8(this.cold_level_addr, num); }
    set rash_level(num: number) { this.emulator.rdramWrite8(this.rash_level_addr, num); }
    set runny_nose_level(num: number) { this.emulator.rdramWrite8(this.runny_nose_level_addr, num); }
    set hiccups_level(num: number) { this.emulator.rdramWrite8(this.hiccups_level_addr, num); }
    set stomach_ache_level(num: number) { this.emulator.rdramWrite8(this.stomach_ache_level_addr, num); }
    set arm_type(num: number) { this.emulator.rdramWrite8(this.arm_type_addr, num); }
    set ear_type(num: number) { this.emulator.rdramWrite8(this.ear_type_addr, num); }
    set eyebrow_type(num: number) { this.emulator.rdramWrite8(this.eyebrow_type_addr, num); }
    set forehead_type(num: number) { this.emulator.rdramWrite8(this.forehead_type_addr, num); }
    set leg_type(num: number) { this.emulator.rdramWrite8(this.leg_type_addr, num); }
    set tail_type(num: number) { this.emulator.rdramWrite8(this.tail_type_addr, num); }
    set wing_type(num: number) { this.emulator.rdramWrite8(this.wing_type_addr, num); }
    set unknown_type(num: number) { this.emulator.rdramWrite8(this.unknown_type_addr, num); }

    // shorts
    get swim_stat() { return this.emulator.rdramRead16(this.swim_stat_addr); }
    get fly_stat() { return this.emulator.rdramRead16(this.fly_stat_addr); }
    get run_stat() { return this.emulator.rdramRead16(this.run_stat_addr); }
    get power_stat() { return this.emulator.rdramRead16(this.power_stat_addr); }
    get stamina_stat() { return this.emulator.rdramRead16(this.stamina_stat_addr); }
    get luck_stat() { return this.emulator.rdramRead16(this.luck_stat_addr); }
    get happiness() { return this.emulator.rdramReadS16(this.happiness_addr); }
    get clock_rollovers() { return this.emulator.rdramRead16(this.clock_rollovers_addr); }
    get lifespan() { return this.emulator.rdramRead16(this.lifespan_addr); }
    get lifespan2() { return this.emulator.rdramRead16(this.lifespan2_addr); }
    get reincarnations() { return this.emulator.rdramRead16(this.reincarnations_addr); }
    get sleepiness() { return this.emulator.rdramRead16(this.sleepiness_addr); }
    get tiredness() { return this.emulator.rdramRead16(this.tiredness_addr); }
    get hunger() { return this.emulator.rdramRead16(this.hunger_addr); }
    get mate_desire() { return this.emulator.rdramRead16(this.mate_desire_addr); }
    get boredom() { return this.emulator.rdramRead16(this.boredom_addr); }
    get energy() { return this.emulator.rdramRead16(this.energy_addr); }

    set swim_stat(num: number) { this.emulator.rdramWrite16(this.swim_stat_addr, num); }
    set fly_stat(num: number) { this.emulator.rdramWrite16(this.fly_stat_addr, num); }
    set run_stat(num: number) { this.emulator.rdramWrite16(this.run_stat_addr, num); }
    set power_stat(num: number) { this.emulator.rdramWrite16(this.power_stat_addr, num); }
    set stamina_stat(num: number) { this.emulator.rdramWrite16(this.stamina_stat_addr, num); }
    set luck_stat(num: number) { this.emulator.rdramWrite16(this.luck_stat_addr, num); }
    set happiness(num: number) { this.emulator.rdramWrite16(this.happiness_addr, num); }
    set clock_rollovers(num: number) { this.emulator.rdramWrite16(this.clock_rollovers_addr, num); }
    set lifespan(num: number) { this.emulator.rdramWrite16(this.lifespan_addr, num); }
    set lifespan2(num: number) { this.emulator.rdramWrite16(this.lifespan2_addr, num); }
    set reincarnations(num: number) { this.emulator.rdramWrite16(this.reincarnations_addr, num); }
    set sleepiness(num: number) { this.emulator.rdramWrite16(this.sleepiness_addr, num); }
    set tiredness(num: number) { this.emulator.rdramWrite16(this.tiredness_addr, num); }
    set hunger(num: number) { this.emulator.rdramWrite16(this.hunger_addr, num); }
    set mate_desire(num: number) { this.emulator.rdramWrite16(this.mate_desire_addr, num); }
    set boredom(num: number) { this.emulator.rdramWrite16(this.boredom_addr, num); }
    set energy(num: number) { this.emulator.rdramWrite16(this.energy_addr, num); }

    // floats
    get power_run() { return this.emulator.rdramReadF32(this.power_run_addr); }
    get fly_swim() { return this.emulator.rdramReadF32(this.fly_swim_addr); }
    get alignment() { return this.emulator.rdramReadF32(this.alignment_addr); }
    get evolution_progress() { return this.emulator.rdramReadF32(this.evolution_progress_addr); }

    set power_run(num: number) { this.emulator.rdramWriteF32(this.power_run_addr, num); }
    set fly_swim(num: number) { this.emulator.rdramWriteF32(this.fly_swim_addr, num); }
    set alignment(num: number) { this.emulator.rdramWriteF32(this.alignment_addr, num); }
    set evolution_progress(num: number) { this.emulator.rdramWriteF32(this.evolution_progress_addr, num); }

    // random unnamed gaps and fields
    get gap_000() { return this.emulator.rdramReadBuffer(this.gap_000_addr, 0x12) }
    get gap_019() { return this.emulator.rdramReadBuffer(this.gap_019_addr, 0x7) }
    get field_046() { return this.emulator.rdramReadBuffer(this.field_046_addr, 0x3A) }
    get field_084() { return this.emulator.rdramReadBuffer(this.field_084_addr, 0x2) }
    get field_088() { return this.emulator.rdramReadBuffer(this.field_088_addr, 0x2) }
    get field_090() { return this.emulator.rdramReadBuffer(this.field_090_addr, 0x18) }
    get gap_0B4() { return this.emulator.rdramReadBuffer(this.gap_0B4_addr, 0xC) }
    get gap_0C4() { return this.emulator.rdramReadBuffer(this.gap_0C4_addr, 0xD) }
    get gap_0D4() { return this.emulator.rdramReadBuffer(this.gap_0D4_addr, 0x1) }
    get field_0DF() { return this.emulator.rdramReadBuffer(this.field_0DF_addr, 0x39) }
    get field_124() { return this.emulator.rdramReadBuffer(this.field_124_addr, 0x8) }
    get field_12D() { return this.emulator.rdramReadBuffer(this.field_12D_addr, 0x1) }
    get field_130() { return this.emulator.rdramReadBuffer(this.field_130_addr, 0x1) }
    get field_132() { return this.emulator.rdramReadBuffer(this.field_132_addr, 0x2) }
    get field_13E() { return this.emulator.rdramReadBuffer(this.field_13E_addr, 0xA) }
    get field_14B() { return this.emulator.rdramReadBuffer(this.field_14B_addr, 0x1) }
    get field_14E() { return this.emulator.rdramReadBuffer(this.field_14E_addr, 0x2) }
    get field_151() { return this.emulator.rdramReadBuffer(this.field_151_addr, 0x4) }
    get field_156() { return this.emulator.rdramReadBuffer(this.field_156_addr, 0x1) }
    get field_158() { return this.emulator.rdramReadBuffer(this.field_158_addr, 0x2) }
    get field_166() { return this.emulator.rdramReadBuffer(this.field_166_addr, 0x6) }
    get field_190() { return this.emulator.rdramReadBuffer(this.field_190_addr, 0x2A8) }
    get field_4DC() { return this.emulator.rdramReadBuffer(this.field_4DC_addr, 0x4) }
    get field_4EC() { return this.emulator.rdramReadBuffer(this.field_4EC_addr, 0x10) }

    set gap_000(buf: Buffer) { this.emulator.rdramWriteBuffer(this.gap_000_addr, buf) }
    set gap_019(buf: Buffer) { this.emulator.rdramWriteBuffer(this.gap_019_addr, buf) }
    set field_046(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_046_addr, buf) }
    set field_084(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_084_addr, buf) }
    set field_088(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_088_addr, buf) }
    set field_090(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_090_addr, buf) }
    set gap_0B4(buf: Buffer) { this.emulator.rdramWriteBuffer(this.gap_0B4_addr, buf) }
    set gap_0C4(buf: Buffer) { this.emulator.rdramWriteBuffer(this.gap_0C4_addr, buf) }
    set gap_0D4(buf: Buffer) { this.emulator.rdramWriteBuffer(this.gap_0D4_addr, buf) }
    set field_0DF(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_0DF_addr, buf) }
    set field_124(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_124_addr, buf) }
    set field_12D(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_12D_addr, buf) }
    set field_130(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_130_addr, buf) }
    set field_132(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_132_addr, buf) }
    set field_13E(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_13E_addr, buf) }
    set field_14B(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_14B_addr, buf) }
    set field_14E(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_14E_addr, buf) }
    set field_151(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_151_addr, buf) }
    set field_156(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_156_addr, buf) }
    set field_158(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_158_addr, buf) }
    set field_166(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_166_addr, buf) }
    set field_190(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_190_addr, buf) }
    set field_4DC(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_4DC_addr, buf) }
    set field_4EC(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_4EC_addr, buf) }
}