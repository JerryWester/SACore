export const enum ChaoGarden {
    UNDEFINED,
    CHAO_GARDEN,
    HERO_GARDEN,
    DARK_GARDEN,
    STATION_SQUARE,
    EGG_CARRIER,
    MYSTIC_RUINS,
    NONE = 0xFF
}

export const enum ChaoArea
{
	Lobby,
	NeutralGarden,
	HeroGarden,
	DarkGarden,
	Race,
	Entrance,
	Kindergarten,
	Stadium = 9,
	Karate,
	NameMachine = 12,
};

export const enum ChaoType {
    EMPTY,
    EGG,
    CHILD,
    GOOD, // unobtainable
    BAD, // unobtainable
    NEUTRAL_NORMAL,
    HERO_NORMAL,
    DARK_NORMAL,
    NEUTRAL_SWIM,
    HERO_SWIM,
    DARK_SWIM,
    NEUTRAL_FLY,
    HERO_FLY,
    DARK_FLY,
    NEUTRAL_RUN,
    HERO_RUN,
    DARK_RUN,
    NEUTRAL_POWER,
    HERO_POWER,
    DARK_POWER,
    NEUTRAL_CHAOS,
    HERO_CHAOS,
    DARK_CHAOS,
    TAILS,
    KNUCKLES,
    AMY
}

export const enum Grade {
    E,
    D,
    C,
    B,
    A,
    S
}

export const enum Emotiball {
    NORMAL,
    FLAME,
    NONE
}

export const enum Eyes {
    NORMAL,
    PAINFUL,
    CLOSED_STRAIGHT,
    CLOSED_HAPPY,
    CLOSED_UP,
    TINY,
    CIRCLES,
    CLOSED_DOWN,
    TINY_2,
    HALF_CLOSED,
    MEAN,
    GREEN_CHAOS,
    BLUE_CHAOS,
    YELLOW_CHAOS
}

export const enum Medal {
    NONE,
    AQUAMARINE,
    TOPAZ,
    PERIDOT,
    GARNET,
    ONYX,
    DIAMOND,
    BEGINNER,
    CHALLENGE,
    HERO,
    DARK,
    PEARL,
    AMETHYST,
    EMERALD,
    RUBY,
    SAPPHIRE
}

export const enum Mouth {
    NONE,
    TOOTHY_SMILE,
    OPEN,
    CLOSED_SMILE,
    CLOSED_FROWN,
    OPEN_SMILE,
    OPEN_FROWN,
    CLOSED_SMILE_2,
    SQUIGGLY,
    TOOTHY_FROWN,
    CLOSED_FROWN_2,
    WIDE_OPEN,
    CLOSED_FROWN_3,
    STRAIGHT_MOUSTACHE,
    SQUIGGLY_MOUSTACHE_1,
    SQUIGGLY_MOUSTACHE_2
}

export const enum SADXBodyType {
    NORMAL,
    EGG_CHAO,
    OMOCHAO,
    NONE
}

export const enum SA2BBodyType {
    NORMAL,
    EGG_CHAO,
    OMOCHAO,
    ANIMAL,
    NONE = 5
}

export const enum SADXColor {
    NORMAL,
    YELLOW,
    WHITE,
    BROWN,
    AQUA,
    PINK,
    BLUE,
    GREY,
    GREEN,
    RED,
    LIGHT_GREEN,
    PURPLE,
    ORANGE,
    BLACK
}

export const enum SA2BColor {
    NORMAL,
    YELLOW,
    WHITE,
    BROWN,
    SKY_BLUE,
    PINK,
    BLUE,
    GREY,
    GREEN,
    RED,
    LIME_GREEN,
    PURPLE,
    ORANGE,
    BLACK
}

export const enum SADXEggColor {
    NORMAL,
    YELLOW_MONO_TONE,
    WHITE_MONO_TONE,
    BROWN_MONO_TONE,
    AQUA_MONO_TONE,
    PINK_MONO_TONE,
    BLUE_MONO_TONE,
    GREY_MONO_TONE,
    GREEN_MONO_TONE,
    RED_MONO_TONE,
    LIGHT_GREEN_MONO_TONE,
    PURPLE_MONO_TONE,
    ORANGE_MONO_TONE,
    BLACK_MONO_TONE,
    YELLOW_TWO_TONE,
    WHITE_TWO_TONE,
    BROWN_TWO_TONE,
    AQUA_TWO_TONE,
    PINK_TWO_TONE,
    BLUE_TWO_TONE,
    GREY_TWO_TONE,
    GREEN_TWO_TONE,
    RED_TWO_TONE,
    LIGHT_GREEN_TWO_TONE,
    PURPLE_TWO_TONE,
    ORANGE_TWO_TONE,
    BLACK_TWO_TONE,
    NORMAL_SHINY,
    YELLOW_SHINY_MONO_TONE,
    WHITE_SHINY_MONO_TONE,
    BROWN_SHINY_MONO_TONE,
    AQUA_SHINY_MONO_TONE,
    PINK_SHINY_MONO_TONE,
    BLUE_SHINY_MONO_TONE,
    GREY_SHINY_MONO_TONE,
    GREEN_SHINY_MONO_TONE,
    RED_SHINY_MONO_TONE,
    LIGHT_GREEN_SHINY_MONO_TONE,
    PURPLE_SHINY_MONO_TONE,
    ORANGE_SHINY_MONO_TONE,
    BLACK_SHINY_MONO_TONE,
    YELLOW_SHINY_TWO_TONE,
    WHITE_SHINY_TWO_TONE,
    BROWN_SHINY_TWO_TONE,
    AQUA_SHINY_TWO_TONE,
    PINK_SHINY_TWO_TONE,
    BLUE_SHINY_TWO_TONE,
    GREY_SHINY_TWO_TONE,
    GREEN_SHINY_TWO_TONE,
    RED_SHINY_TWO_TONE,
    LIGHT_GREEN_SHINY_TWO_TONE,
    PURPLE_SHINY_TWO_TONE,
    ORANGE_SHINY_TWO_TONE,
    BLACK_SHINY_TWO_TONE,
    YELLOW_JEWEL,
    WHITE_JEWEL,
    PINK_JEWEL,
    BLUE_JEWEL,
    GREEN_JEWEL,
    PURPLE_JEWEL,
    AQUA_JEWEL,
    RED_JEWEL,
    BLACK_JEWEL,
    LIGHT_GREEN_JEWEL,
    ORANGE_JEWEL,
    PEARL,
    METAL_1,
    METAL_2,
    GLASS
}

export const enum SA2BEggColor {
    NORMAL,
    YELLOW_MONO_TONE,
    WHITE_MONO_TONE,
    BROWN_MONO_TONE,
    SKY_BLUE_MONO_TONE,
    PINK_MONO_TONE,
    BLUE_MONO_TONE,
    GREY_MONO_TONE,
    GREEN_MONO_TONE,
    RED_MONO_TONE,
    LIME_GREEN_MONO_TONE,
    PURPLE_MONO_TONE,
    ORANGE_MONO_TONE,
    BLACK_MONO_TONE,
    YELLOW_TWO_TONE,
    WHITE_TWO_TONE,
    BROWN_TWO_TONE,
    SKY_BLUE_TWO_TONE,
    PINK_TWO_TONE,
    BLUE_TWO_TONE,
    GREY_TWO_TONE,
    GREEN_TWO_TONE,
    RED_TWO_TONE,
    LIME_GREEN_TWO_TONE,
    PURPLE_TWO_TONE,
    ORANGE_TWO_TONE,
    BLACK_TWO_TONE,
    NORMAL_SHINY,
    YELLOW_SHINY_MONO_TONE,
    WHITE_SHINY_MONO_TONE,
    BROWN_SHINY_MONO_TONE,
    SKY_BLUE_SHINY_MONO_TONE,
    PINK_SHINY_MONO_TONE,
    BLUE_SHINY_MONO_TONE,
    GREY_SHINY_MONO_TONE,
    GREEN_SHINY_MONO_TONE,
    RED_SHINY_MONO_TONE,
    LIME_GREEN_SHINY_MONO_TONE,
    PURPLE_SHINY_MONO_TONE,
    ORANGE_SHINY_MONO_TONE,
    BLACK_SHINY_MONO_TONE,
    YELLOW_SHINY_TWO_TONE,
    WHITE_SHINY_TWO_TONE,
    BROWN_SHINY_TWO_TONE,
    SKY_BLUE_SHINY_TWO_TONE,
    PINK_SHINY_TWO_TONE,
    BLUE_SHINY_TWO_TONE,
    GREY_SHINY_TWO_TONE,
    GREEN_SHINY_TWO_TONE,
    RED_SHINY_TWO_TONE,
    LIME_GREEN_SHINY_TWO_TONE,
    PURPLE_SHINY_TWO_TONE,
    ORANGE_SHINY_TWO_TONE,
    BLACK_SHINY_TWO_TONE,
    GLITCHY_NORMAL
}

export const enum SADXTexture {
    NONE,
    YELLOW_JEWEL,
    WHITE_JEWEL,
    PINK_JEWEL,
    BLUE_JEWEL,
    GREEN_JEWEL,
    PURPLE_JEWEL,
    AQUA_JEWEL,
    RED_JEWEL,
    BLACK_JEWEL,
    LIGHT_GREEN_JEWEL,
    ORANGE_JEWEL,
    PEARL,
    METAL_1,
    METAL_2,
    GLASS,
    MOON
}

export const enum SA2BTexture {
    NONE,
    YELLOW_JEWEL,
    WHITE_JEWEL,
    PINK_JEWEL,
    BLUE_JEWEL,
    GREEN_JEWEL,
    PURPLE_JEWEL,
    SKY_BLUE_JEWEL,
    RED_JEWEL,
    BLACK_JEWEL,
    LIME_GREEN_JEWEL,
    ORANGE_JEWEL,
    PEARL,
    METAL_1,
    METAL_2,
    GLASS,
    MOON
}

export const enum FavoriteFruit {
    ROUND_FRUIT_1,
    ROUND_FRUIT_2,
    TRIANGLE_FRUIT_1,
    TRIANGLE_FRUIT_2,
    SQUARE_FRUIT_1,
    SQUARE_FRUIT_2,
    NONE_1,
    NONE_2
}

export interface IClassroomLessonFlags {
    drawing_level_1: boolean;
    drawing_level_2: boolean;
    drawing_level_3: boolean;
    drawing_level_4: boolean;
    drawing_level_5: boolean;
    shake_dance: boolean;
    spin_dance: boolean;
    step_dance: boolean;
    go_go_dance: boolean;
    exercise: boolean;
    song_level_1: boolean;
    song_level_2: boolean;
    song_level_3: boolean;
    song_level_4: boolean;
    song_level_5: boolean;
    bell: boolean;
    castanets: boolean;
    cymbals: boolean;
    drum: boolean;
    flute: boolean;
    maracas: boolean;
    trumpet: boolean;
    tambourine: boolean;
}

export interface ISADXAnimalFlags {
    seal: boolean;
    penguin: boolean;
    otter: boolean;
    peacock: boolean;
    swallow: boolean;
    parrot: boolean;
    deer: boolean;
    rabbit: boolean;
    kangaroo: boolean;
    gorilla: boolean;
    lion: boolean;
    elephant: boolean;
    mole: boolean;
    koala: boolean;
    skunk: boolean;
}

export interface ISA2BAnimalFlags {
    penguin: boolean;
    seal: boolean;
    otter: boolean;
    rabbit: boolean;
    cheetah: boolean;
    boar: boolean;
    bear: boolean;
    tiger: boolean;
    gorilla: boolean;
    peacock: boolean;
    parrot: boolean;
    condor: boolean;
    skunk: boolean;
    sheep: boolean;
    raccoon: boolean;
    half_fish: boolean;
    skeleton_dog: boolean;
    bat: boolean;
    dragon: boolean;
    unicorn: boolean;
    phoenix: boolean;
}

export interface IToyFlags {
    rattle: boolean;
    car: boolean;
    picture_book: boolean;
    sonic_doll: boolean;
    broomstick: boolean;
    unknown: boolean;
    pogo_stick: boolean;
    crayons: boolean;
    bubble_wand: boolean;
    shovel: boolean;
    watering_can: boolean;
}

export const enum ItemCategory {
    EGG = 1,
    FRUIT = 3,
    SEED = 7,
    HAT = 9,
    MENU_THEME = 16
}

export const enum SADXAnimal {
    SEAL,
    PENGUIN,
    OTTER,
    PEACOCK,
    SWALLOW,
    PARROT,
    DEER,
    RABBIT,
    KANGAROO,
    GORILLA,
    LION,
    ELEPHANT,
    MOLE,
    KOALA,
    SKUNK,
    NONE = 255
}

export const enum SA2BAnimal {
    PENGUIN,
    SEAL,
    OTTER,
    RABBIT,
    CHEETAH,
    BOAR,
    BEAR,
    TIGER,
    GORILLA,
    PEACOCK,
    PARROT,
    CONDOR,
    SKUNK,
    SHEEP,
    RACCOON,
    HALF_FISH,
    SKELETON_DOG,
    BAT,
    DRAGON,
    UNICORN,
    PHOENIX,
    YELLOW_CHAOS_DRIVE,
    GREEN_CHAOS_DRIVE,
    RED_CHAOS_DRIVE,
    PURPLE_CHAOS_DRIVE,
    NONE = 255
}

export const enum SADXFruit {
    NONE = 255,
    REGULAR_FRUIT = 24,
    STRONG_FRUIT = 3,
    TASTY_FRUIT = 4,
    HERO_FRUIT = 5,
    DARK_FRUIT = 6,
    ROUND_FRUIT = 7,
    TRIANGULAR_FRUIT = 8,
    CUBICLE_FRUIT = 9,
    HEART_FRUIT = 10,
    CHAO_FRUIT = 11,
    MUSHROOM = 20,
    MUSHROOM_ALT = 21,
    ORANGE_FRUIT = 13,
    BLUE_FRUIT = 14,
    PINK_FRUIT = 15,
    GREEN_FRUIT = 16,
    PURPLE_FRUIT = 17,
    YELLOW_FRUIT = 18,
    RED_FRUIT = 19,
    SMART_FRUIT = 12
}

export const enum SA2BFruit {
    NONE = 255,
    CHAO_GARDEN_FRUIT = 0,
    HERO_GARDEN_FRUIT = 1,
    DARK_GARDEN_FRUIT = 2,
    STRONG_FRUIT = 3,
    TASTY_FRUIT = 4,
    HERO_FRUIT = 5,
    DARK_FRUIT = 6,
    ROUND_FRUIT = 7,
    TRIANGLE_FRUIT = 8,
    SQUARE_FRUIT = 9,
    HEART_FRUIT = 10,
    CHAO_FRUIT = 11,
    MUSHROOM = 20,
    MUSHROOM_ALT = 21,
    ORANGE_FRUIT = 13,
    BLUE_FRUIT = 14,
    PINK_FRUIT = 15,
    GREEN_FRUIT = 16,
    PURPLE_FRUIT = 17,
    YELLOW_FRUIT = 18,
    RED_FRUIT = 19,
    SMART_FRUIT = 12,
    MINT_CANDY = 22,
    GRAPES = 23
}

export const enum SADXHat {
    NONE,
    PUMPKIN,
    SKULL,
    APPLE,
    BUCKET,
    EMPTY_CAN,
    CARDBOARD_BOX,
    FLOWER_POT,
    PAPER_BAG,
    PAN,
    STUMP,
    WATERMELON,
    RED_WOOL_BEANIE,
    BLUE_WOOL_BEANIE,
    BLACK_WOOL_BEANIE,
    PACIFIER,
    NORMAL_EGG_SHELL,
    YELLOW_MONO_TONE_EGG_SHELL,
    WHITE_MONO_TONE_EGG_SHELL,
    BROWN_MONO_TONE_EGG_SHELL,
    AQUA_MONO_TONE_EGG_SHELL,
    PINK_MONO_TONE_EGG_SHELL,
    BLUE_MONO_TONE_EGG_SHELL,
    GREY_MONO_TONE_EGG_SHELL,
    GREEN_MONO_TONE_EGG_SHELL,
    RED_MONO_TONE_EGG_SHELL,
    LIGHT_GREEN_MONO_TONE_EGG_SHELL,
    PURPLE_MONO_TONE_EGG_SHELL,
    ORANGE_MONO_TONE_EGG_SHELL,
    BLACK_MONO_TONE_EGG_SHELL,
    YELLOW_TWO_TONE_EGG_SHELL,
    WHITE_TWO_TONE_EGG_SHELL,
    BROWN_TWO_TONE_EGG_SHELL,
    AQUA_TWO_TONE_EGG_SHELL,
    PINK_TWO_TONE_EGG_SHELL,
    BLUE_TWO_TONE_EGG_SHELL,
    GREY_TWO_TONE_EGG_SHELL,
    GREEN_TWO_TONE_EGG_SHELL,
    RED_TWO_TONE_EGG_SHELL,
    LIGHT_GREEN_TWO_TONE_EGG_SHELL,
    PURPLE_TWO_TONE_EGG_SHELL,
    ORANGE_TWO_TONE_EGG_SHELL,
    BLACK_TWO_TONE_EGG_SHELL,
    NORMAL_SHINY_EGG_SHELL,
    YELLOW_SHINY_MONO_TONE_EGG_SHELL,
    WHITE_SHINY_MONO_TONE_EGG_SHELL,
    BROWN_SHINY_MONO_TONE_EGG_SHELL,
    AQUA_SHINY_MONO_TONE_EGG_SHELL,
    PINK_SHINY_MONO_TONE_EGG_SHELL,
    BLUE_SHINY_MONO_TONE_EGG_SHELL,
    GREY_SHINY_MONO_TONE_EGG_SHELL,
    GREEN_SHINY_MONO_TONE_EGG_SHELL,
    RED_SHINY_MONO_TONE_EGG_SHELL,
    LIGHT_GREEN_SHINY_MONO_TONE_EGG_SHELL,
    PURPLE_SHINY_MONO_TONE_EGG_SHELL,
    ORANGE_SHINY_MONO_TONE_EGG_SHELL,
    BLACK_SHINY_MONO_TONE_EGG_SHELL,
    YELLOW_SHINY_TWO_TONE_EGG_SHELL,
    WHITE_SHINY_TWO_TONE_EGG_SHELL,
    BROWN_SHINY_TWO_TONE_EGG_SHELL,
    AQUA_SHINY_TWO_TONE_EGG_SHELL,
    PINK_SHINY_TWO_TONE_EGG_SHELL,
    BLUE_SHINY_TWO_TONE_EGG_SHELL,
    GREY_SHINY_TWO_TONE_EGG_SHELL,
    GREEN_SHINY_TWO_TONE_EGG_SHELL,
    RED_SHINY_TWO_TONE_EGG_SHELL,
    LIGHT_GREEN_SHINY_TWO_TONE_EGG_SHELL,
    PURPLE_SHINY_TWO_TONE_EGG_SHELL,
    ORANGE_SHINY_TWO_TONE_EGG_SHELL,
    BLACK_SHINY_TWO_TONE_EGG_SHELL,
    YELLOW_JEWEL_EGG_SHELL,
    WHITE_JEWEL_EGG_SHELL,
    PINK_JEWEL_EGG_SHELL,
    BLUE_JEWEL_EGG_SHELL,
    GREEN_JEWEL_EGG_SHELL,
    PURPLE_JEWEL_EGG_SHELL,
    AQUA_JEWEL_EGG_SHELL,
    RED_JEWEL_EGG_SHELL,
    BLACK_JEWEL_EGG_SHELL,
    LIGHT_GREEN_JEWEL_EGG_SHELL,
    ORANGE_JEWEL_EGG_SHELL,
    PEARL_EGG_SHELL,
    METAL_1_EGG_SHELL,
    METAL_2_EGG_SHELL,
    GLASS_EGG_SHELL
}

export const enum SA2BHat {
    NONE,
    PUMPKIN,
    SKULL,
    APPLE,
    BUCKET,
    EMPTY_CAN,
    CARDBOARD_BOX,
    FLOWER_POT,
    PAPER_BAG,
    PAN,
    STUMP,
    WATERMELON,
    RED_WOOL_BEANIE,
    BLUE_WOOL_BEANIE,
    BLACK_WOOL_BEANIE,
    PACIFIER,
    NORMAL_EGG_SHELL,
    YELLOW_MONO_TONE_EGG_SHELL,
    WHITE_MONO_TONE_EGG_SHELL,
    BROWN_MONO_TONE_EGG_SHELL,
    SKY_BLUE_MONO_TONE_EGG_SHELL,
    PINK_MONO_TONE_EGG_SHELL,
    BLUE_MONO_TONE_EGG_SHELL,
    GREY_MONO_TONE_EGG_SHELL,
    GREEN_MONO_TONE_EGG_SHELL,
    RED_MONO_TONE_EGG_SHELL,
    LIME_GREEN_MONO_TONE_EGG_SHELL,
    PURPLE_MONO_TONE_EGG_SHELL,
    ORANGE_MONO_TONE_EGG_SHELL,
    BLACK_MONO_TONE_EGG_SHELL,
    YELLOW_TWO_TONE_EGG_SHELL,
    WHITE_TWO_TONE_EGG_SHELL,
    BROWN_TWO_TONE_EGG_SHELL,
    SKY_BLUE_TWO_TONE_EGG_SHELL,
    PINK_TWO_TONE_EGG_SHELL,
    BLUE_TWO_TONE_EGG_SHELL,
    GREY_TWO_TONE_EGG_SHELL,
    GREEN_TWO_TONE_EGG_SHELL,
    RED_TWO_TONE_EGG_SHELL,
    LIME_GREEN_TWO_TONE_EGG_SHELL,
    PURPLE_TWO_TONE_EGG_SHELL,
    ORANGE_TWO_TONE_EGG_SHELL,
    BLACK_TWO_TONE_EGG_SHELL,
    NORMAL_SHINY_EGG_SHELL,
    YELLOW_SHINY_MONO_TONE_EGG_SHELL,
    WHITE_SHINY_MONO_TONE_EGG_SHELL,
    BROWN_SHINY_MONO_TONE_EGG_SHELL,
    SKY_BLUE_SHINY_MONO_TONE_EGG_SHELL,
    PINK_SHINY_MONO_TONE_EGG_SHELL,
    BLUE_SHINY_MONO_TONE_EGG_SHELL,
    GREY_SHINY_MONO_TONE_EGG_SHELL,
    GREEN_SHINY_MONO_TONE_EGG_SHELL,
    RED_SHINY_MONO_TONE_EGG_SHELL,
    LIME_GREEN_SHINY_MONO_TONE_EGG_SHELL,
    PURPLE_SHINY_MONO_TONE_EGG_SHELL,
    ORANGE_SHINY_MONO_TONE_EGG_SHELL,
    BLACK_SHINY_MONO_TONE_EGG_SHELL,
    YELLOW_SHINY_TWO_TONE_EGG_SHELL,
    WHITE_SHINY_TWO_TONE_EGG_SHELL,
    BROWN_SHINY_TWO_TONE_EGG_SHELL,
    SKY_BLUE_SHINY_TWO_TONE_EGG_SHELL,
    PINK_SHINY_TWO_TONE_EGG_SHELL,
    BLUE_SHINY_TWO_TONE_EGG_SHELL,
    GREY_SHINY_TWO_TONE_EGG_SHELL,
    GREEN_SHINY_TWO_TONE_EGG_SHELL,
    RED_SHINY_TWO_TONE_EGG_SHELL,
    LIME_GREEN_SHINY_TWO_TONE_EGG_SHELL,
    PURPLE_SHINY_TWO_TONE_EGG_SHELL,
    ORANGE_SHINY_TWO_TONE_EGG_SHELL,
    BLACK_SHINY_TWO_TONE_EGG_SHELL,
    GLITCHY_NORMAL_EGG_SHELL
}

export const enum Seed {
    STRONG_SEED,
    TASTY_SEED,
    HERO_SEED,
    DARK_SEED,
    ROUND_SEED,
    TRIANGLE_SEED,
    SQUARE_SEED,
    NONE = 255
}

export const enum Theme {
    OMOCHAO_THEME,
    AMY_THEME,
    MARIA_THEME
}

export interface IChaoDNA {
    /* 0x00 */ reset_trigger: boolean; // 0x1
    /* 0x01 */ field_1: Buffer; // 0x5B
    /* 0x5C */ swim_stat_grade1: number; // 0x1
    /* 0x5D */ swim_stat_grade2: number; // 0x1
    /* 0x5E */ fly_stat_grade1: number; // 0x1
    /* 0x5F */ fly_stat_grade2: number; // 0x1
    /* 0x60 */ run_stat_grade1: number; // 0x1
    /* 0x61 */ run_stat_grade2: number; // 0x1
    /* 0x62 */ power_stat_grade1: number; // 0x1
    /* 0x63 */ power_stat_grade2: number; // 0x1
    /* 0x64 */ stamina_stat_grade1: number; // 0x1
    /* 0x65 */ stamina_stat_grade2: number; // 0x1
    /* 0x66 */ luck_stat_grade1: number; // 0x1
    /* 0x67 */ luck_stat_grade2: number; // 0x1
    /* 0x68 */ intelligence_stat_grade1: number; // 0x1
    /* 0x69 */ intelligence_stat_grade2: number; // 0x1
    /* 0x6A */ unknown_stat_grade1: number; // 0x1
    /* 0x6B */ unknown_stat_grade2: number; // 0x1
    /* 0x6C */ field_6C: Buffer; // 0x22
    /* 0x8E */ favorite_fruit1: number; // 0x1
    /* 0x8F */ favorite_fruit2: number; // 0x1
    /* 0x90 */ field_90: Buffer; // 0x4
    /* 0x94 */ color1: number; // 0x1
    /* 0x95 */ color2: number; // 0x1
    /* 0x96 */ monotone_flag1: boolean; // 0x1
    /* 0x97 */ monotone_flag2: boolean; // 0x1
    /* 0x98 */ texture1: number; // 0x1
    /* 0x99 */ texture2: number; // 0x1
    /* 0x9A */ shiny_flag1: boolean; // 0x1
    /* 0x9B */ shiny_flag2: boolean; // 0x1
    /* 0x9C */ egg_color1: number; // 0x1
    /* 0x9D */ egg_color2: number; // 0x1
    /* 0x9E */ gap_9E: Buffer; // 0x6
}

export interface IChaoCharacterBond {
    /* 0x0 */ a: number; // 0x1
    /* 0x1 */ b: number; // 0x1
    /* 0x2 */ unknown: number; // 0x4
}

export const enum SADXCharacters {
    SONIC,
    TAILS,
    KNUCKLES,
    AMY,
    GAMMA,
    BIG
}

export interface ISADXCharacterBonds {
    /* 0x00 */ sonic: IChaoCharacterBond; // 0x6
    /* 0x06 */ tails: IChaoCharacterBond; // 0x6
    /* 0x0C */ knuckles: IChaoCharacterBond; // 0x6
    /* 0x12 */ amy: IChaoCharacterBond; // 0x6
    /* 0x18 */ gamma: IChaoCharacterBond; // 0x6
    /* 0x1E */ big: IChaoCharacterBond; // 0x6
}

export const enum SA2BCharacters {
    SONIC,
    SHADOW,
    TAILS,
    EGGMAN,
    KNUCKLES,
    ROUGE
}

export interface ISA2BCharacterBonds {
    /* 0x00 */ sonic: IChaoCharacterBond; // 0x6
    /* 0x06 */ shadow: IChaoCharacterBond; // 0x6
    /* 0x0C */ tails: IChaoCharacterBond; // 0x6
    /* 0x12 */ eggman: IChaoCharacterBond; // 0x6
    /* 0x18 */ knuckles: IChaoCharacterBond; // 0x6
    /* 0x1E */ rouge: IChaoCharacterBond; // 0x6
}

export interface IChaoData {
    /* 0x000 */ gap_000: Buffer; // 0x12
    /* 0x012 */ name: string; // 0x7
    /* 0x019 */ gap_019: Buffer; // 0x7
    /* 0x020 */ swim_fraction: number; // 0x1
    /* 0x021 */ fly_fraction: number; // 0x1
    /* 0x022 */ run_fraction: number; // 0x1
    /* 0x023 */ power_fraction: number; // 0x1
    /* 0x024 */ stamina_fraction: number; // 0x1
    /* 0x025 */ lucky_fraction: number; // 0x1
    /* 0x026 */ intelligence_fraction: number; // 0x1
    /* 0x027 */ unknown_fraction: number; // 0x1
    /* 0x028 */ swim_grade: Grade; // 0x1
    /* 0x029 */ fly_grade: Grade; // 0x1
    /* 0x02A */ run_grade: Grade; // 0x1
    /* 0x02B */ power_grade: Grade; // 0x1
    /* 0x02C */ stamina_grade: Grade; // 0x1
    /* 0x02D */ lucky_grade: Grade; // 0x1
    /* 0x02E */ intelligence_grade: Grade; // 0x1
    /* 0x02F */ unknown_grade: Grade; // 0x1
    /* 0x030 */ swim_level: number; // 0x1
    /* 0x031 */ fly_level: number; // 0x1
    /* 0x032 */ run_level: number; // 0x1
    /* 0x033 */ power_level: number; // 0x1
    /* 0x034 */ stamina_level: number; // 0x1
    /* 0x035 */ luck_level: number; // 0x1
    /* 0x036 */ intelligence_level: number; // 0x1
    /* 0x037 */ unknown_level: number; // 0x1
    /* 0x038 */ swim_stat: number; // 0x2
    /* 0x03A */ fly_stat: number; // 0x2
    /* 0x03C */ run_stat: number; // 0x2
    /* 0x03E */ power_stat: number; // 0x2
    /* 0x040 */ stamina_stat: number; // 0x2
    /* 0x042 */ luck_stat: number; // 0x2
    /* 0x044 */ intelligence_stat: number; // 0x1
    /* 0x045 */ unknown_stat: number; // 0x1
    /* 0x046 */ field_046: Buffer; // 0x3A
    /* 0x080 */ type: ChaoType; // 0x1
    /* 0x081 */ garden: ChaoGarden; // 0x1
    /* 0x082 */ happiness: number; // 0x2
    /* 0x084 */ field_084: Buffer; // 0x2
    /* 0x086 */ clock_rollovers: number; // 0x2
    /* 0x088 */ field_088: Buffer; // 0x2
    /* 0x08A */ lifespan: number; // 0x2
    /* 0x08C */ lifespan2: number; // 0x2
    /* 0x08E */ reincarnations: number; // 0x2
    /* 0x090 */ field_090: Buffer; // 0x18
    /* 0x0A8 */ power_run: number; // 0x4
    /* 0x0AC */ fly_swim: number; // 0x4
    /* 0x0B0 */ alignment: number; // 0x4
    /* 0x0B4 */ gap_0B4: Buffer; // 0xC
    /* 0x0C0 */ evolution_progress: number; // 0x4
    /* 0x0C4 */ gap_0C4: Buffer; // 0xD
    /* 0x0D1 */ eye_type: Eyes; // 0x1
    /* 0x0D2 */ mouth_type: Mouth; // 0x1
    /* 0x0D3 */ ball_type: Emotiball; // 0x1
    /* 0x0D4 */ gap_0D4: Buffer; // 0x1
    /* 0x0D5 */ headgear: SADXHat | SA2BHat; // 0x1
    /* 0x0D6 */ hide_feet: boolean; // 0x1
    /* 0x0D7 */ medal: Medal; // 0x1
    /* 0x0D8 */ color: SADXColor | SA2BColor; // 0x1
    /* 0x0D9 */ monotone_highlights: boolean; // 0x1
    /* 0x0DA */ texture: SADXTexture | SA2BTexture; // 0x1
    /* 0x0DB */ shiny: boolean; // 0x1
    /* 0x0DC */ egg_color: SADXEggColor | SA2BEggColor; // 0x1
    /* 0x0DD */ body_type: SADXBodyType | SA2BBodyType; // 0x1
    /* 0x0DE */ body_type_animal: number; // 0x1
    /* 0x0DF */ field_0DF: Buffer; // 0x39
    /* 0x118 */ sa2_animal_behaviors: ISA2BAnimalFlags; // 0x4
    /* 0x11C */ sa2b_arm_type: SA2BAnimal; // 0x1
    /* 0x11D */ sa2b_ear_type: SA2BAnimal; // 0x1
    /* 0x11E */ sa2b_forehead_type: SA2BAnimal; // 0x1
    /* 0x11F */ sa2b_horn_type: SA2BAnimal; // 0x1
    /* 0x120 */ sa2b_leg_type: SA2BAnimal; // 0x1
    /* 0x121 */ sa2b_tail_type: SA2BAnimal; // 0x1
    /* 0x122 */ sa2b_wing_type: SA2BAnimal; // 0x1
    /* 0x123 */ sa2b_face_type: SA2BAnimal; // 0x1
    /* 0x124 */ field_124: Buffer; // 0x8
    /* 0x12C */ joy: number; // 0x1
    /* 0x12D */ field_12D: Buffer; // 0x1
    /* 0x12E */ urge_to_cry: number; // 0x1
    /* 0x12F */ fear: number; // 0x1
    /* 0x130 */ field_130: Buffer; // 0x1
    /* 0x131 */ dizziness: number; // 0x1
    /* 0x132 */ field_132: Buffer; // 0x2
    /* 0x134 */ sleepiness: number; // 0x2
    /* 0x136 */ tiredness: number; // 0x2
    /* 0x138 */ hunger: number; // 0x2
    /* 0x13A */ mate_desire: number; // 0x2
    /* 0x13C */ boredom: number; // 0x2
    /* 0x13E */ field_13E: Buffer; // 0xA
    /* 0x148 */ energy: number; // 0x2
    /* 0x14A */ normal_curiosity: number; // 0x1
    /* 0x14B */ field_14B: Buffer; // 0x1
    /* 0x14C */ cry_baby_energetic: number; // 0x1
    /* 0x14D */ naive_normal: number; // 0x1
    /* 0x14E */ field_14E: Buffer; // 0x2
    /* 0x150 */ normal_bigeater: number; // 0x1
    /* 0x151 */ field_151: Buffer; // 0x4
    /* 0x155 */ normal_carefree: number; // 0x1
    /* 0x156 */ field_156: Buffer; // 0x1
    /* 0x157 */ favorite_fruit: FavoriteFruit; // 0x1
    /* 0x158 */ field_158: Buffer; // 0x2
    /* 0x15A */ cough_level: number; // 0x1
    /* 0x15B */ cold_level: number; // 0x1
    /* 0x15C */ rash_level: number; // 0x1
    /* 0x15D */ runny_nose_level: number; // 0x1
    /* 0x15E */ hiccups_level: number; // 0x1
    /* 0x15F */ stomach_ache_level: number; // 0x1
    /* 0x160 */ sa2b_skills: IClassroomLessonFlags; // 0x4
    /* 0x164 */ sa2b_toys: IToyFlags; // 0x2
    /* 0x166 */ field_166: Buffer; // 0x6
    /* 0x16C */ sa2b_character_bonds: ISA2BCharacterBonds; // 0x24
    /* 0x190 */ field_190: Buffer; // 0x2A8
    /* 0x438 */ dna: IChaoDNA; // 0xA4
    /* 0x4DC */ field_4DC: Buffer; // 0x4
    /* 0x4E0 */ sadx_animal_behaviors: ISADXAnimalFlags; // 0x4
    /* 0x4E4 */ arm_type: SADXAnimal; // 0x1
    /* 0x4E5 */ ear_type: SADXAnimal; // 0x1
    /* 0x4E6 */ eyebrow_type: SADXAnimal; // 0x1
    /* 0x4E7 */ forehead_type: SADXAnimal; // 0x1
    /* 0x4E8 */ leg_type: SADXAnimal; // 0x1
    /* 0x4E9 */ tail_type: SADXAnimal; // 0x1
    /* 0x4EA */ wing_type: SADXAnimal; // 0x1
    /* 0x4EB */ unknown_type: SADXAnimal; // 0x1
    /* 0x4EC */ field_4EC: Buffer; // 0x10
    /* 0x4FC */ sadx_character_bonds: ISADXCharacterBonds; // 0x24
    pointer: number;
}

export interface IAnimal {
    /* 0x0 */ type: SADXAnimal | SA2BAnimal; // 0x2
    /* 0x2 */ garden: ChaoGarden; // 0x2
}

export interface IFruit {
    /* 0x0 */ type: SADXFruit | SA2BFruit; // 0x2
    /* 0x2 */ garden: ChaoGarden; // 0x2
    /* 0x4 */ size: number; // 0x2
    /* 0x6 */ age: number; // 0x1
}

export interface IHat {
    /* 0x0 */ type: SADXHat | SA2BHat; // 0x2
    /* 0x2 */ garden: ChaoGarden; // 0x2
}

export interface ISeed {
    /* 0x0 */ type: Seed; // 0x2
    /* 0x2 */ garden: ChaoGarden; // 0x2
}

export interface IBlackMarketItem {
    /* 0x0 */ category: ItemCategory; // 0x1
    /* 0x1 */ type: SADXEggColor | SA2BEggColor | SADXFruit | SA2BFruit | Seed | SADXHat | SA2BHat | Theme
}

export interface IChaoGarden {
    chaos: IChaoData[]
}