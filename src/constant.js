const TEXT = {
  INPUT: {
    BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
    MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  },
  OUTPUT: {
    START: "다리 건너기 게임을 시작합니다.\n",
  },
};

const ERROR = {
  BRIDGE_SIZE: "[ERROR]\n",
  MOVEMENT: "[ERROR]\n",
  RESTART: "[ERROR]\n",
};

module.exports = {
  TEXT,
  ERROR,
};
