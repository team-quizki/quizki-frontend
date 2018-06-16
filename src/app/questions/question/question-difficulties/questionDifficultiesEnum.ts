export enum QuestionDifficulties {
  notdefined = -1,
  all = 0,
  Junior = 1,       //note inconsistent capitalization
  intermediate = 2,
  senior = 3,
  guru = 4
}

/*
as defined in Quizki DifficultyEnums.java...

note:   In Typescript undefined is a keyword and will break stuff
        it's been changed to notdefined here to avoid that

UNDEFINED (-1, "undefined"),
ALL_DIFFICULTIES (0, "all"),
JUNIOR (1, "Junior"),
INTERMEDIATE (2, "intermediate"),
SENIOR (3, "senior"),
GURU (4, "guru");
*/
