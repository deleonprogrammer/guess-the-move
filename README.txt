It is a common practice exercise for chess improvers to try and guess the moves of the masters during a game. This program should be used for that purpose.

In its current state, it fetches games from three chess grandmasters: Benjamin Bok, Benjamin Finegold, and Daniel Naroditsky.

I also added some filters when fetching the games from chess.com's API, in the code itself, such as only fetching games where Benjamin Bok had the Black pieces against 1.d4 (as I wanted to practice his chessable repertoire), and only fetching games of high accuracy, as otherwise the instructive value would probably not be as great, not to mention the moves would be harder to spot if they weren't logical and sound.

These are the steps for using this program:

1. User chooses a master to fetch games from.
2. User clicks on New Game. At this point, the program will try to fetch a game of that master, from the last two months, using the filters I specified in the code (some of which were mentioned in this document by now), using chess.com's public API. This can take a few seconds.
3. The user clicks on a piece of the master's color, and a destination square, trying to guess the move played in the game.
4. The score is updated, increasing it by one point, equivalent to one move made by the chosen master, if the user chose the right move. The game displays the moves (both for the master, and for his opponent) as they actually happened, regardless of whether the user guessed right or wrong.
5. Steps three and four are repeated until there are no more moves to be guessed.

If, at any point, the user clicks the new game button again, another game is fetched.

Improvements that could be done in future versions:
1. Add a loading spinner while games are being fetched.
2. Add a visual cue showing if the user guessed right or wrong (as of now, only the score gets updated, but another visual cue would help make things clearer to the user).
3. Add a visual cue when the game ended (right now, the only indicator that the game is over is that the user can't keep trying to guess moves; there is also the score as an indicator, but only in the case where the user guessed every move correctly).
4. Remove console logs (I logged some data for coding purposes, but obviously if this were released to the public, the logs shouldn't be there). That being said, since this program is only an addition to my curriculum, the logs won't necessarily hurt, and removing them whenever I want to would be a very easy task. For now, they're helpful for when I decide to implement the aforementioned changes.