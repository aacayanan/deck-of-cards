import math


# calculate the Probability
def probability(rating1, rating2):
    # calculate the expected score
    expected_score = 1 / (1 + math.pow(10, (rating1 - rating2) / 400))
    return expected_score


# calculate the new rating
def elo_rating(rating_A, rating_B, k_factor, outcome):
    # calculate the winning probability for player A and player B
    expected_score_A = probability(rating_B, rating_A)
    expected_score_B = probability(rating_A, rating_B)

    # calculate the new rating for player A and player B
    new_rating_A = rating_A + k_factor * (outcome - expected_score_A)
    new_rating_B = rating_B + k_factor * ((1 - outcome) - expected_score_B)

    return new_rating_A, new_rating_B


# main function
def main():
    # player A
    rating_A = 1400
    # player B
    rating_B = 1200
    # k factor
    k_factor = 133.7
    # outcome of the game (1 for player A win, 0 for player B win, 0.5 for draw)
    outcome = 1

    new_rating_A, new_rating_B = elo_rating(rating_A, rating_B, k_factor, outcome)

    print("New rating for player A:", new_rating_A)
    print("New rating for player B:", new_rating_B)


if __name__ == "__main__":
    main()
