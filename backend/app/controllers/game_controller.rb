class GameController < ApplicationController
    def create
        game = Game.new(game_params)
        
        if !game.save
            alert('there was an issue creating your game')
        end
    end

    def finishGame
        
    end

    private

    def game_params 
        params.require(:game).permit(:P1_id, :P2_id)
    end
end
