import { QuestionSetObj, OptionObj } from "./question_set.objects";
import { GameState } from "../enums/game_state.enum";

interface GameObj {
  info: GameInfoObj;
  players: UserObj[];
  question_set: QuestionSetObj;
  current_question: number;
}

interface GameInfoObj {
  join_code: number;
  player_count: number;
  game_state: GameState;
}

interface UserObj {
  id: number;
  display_name: string;

  total_score: number;
  last_question_points: number;

  leaderboard_position: number;

  point_history: PointRecordObj[];
}

interface PointRecordObj {
  question_number: number;
  points_earned: number;

  option: OptionObj;
}

export { GameObj, GameInfoObj, UserObj, PointRecordObj };
