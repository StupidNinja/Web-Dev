def make_chocolate(small, big, goal):
    max_big_bars = min(goal // 5, big)
    remaining_goal = goal - max_big_bars * 5
    if remaining_goal <= small:
        return remaining_goal
    return -1