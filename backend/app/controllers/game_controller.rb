class GameController < ApplicationController

    def create
        game = Game.new(game_params)
        
        if game.save
            render json: {status: :created, game: game}
        else
            render json: {status:500, errors: game.errors.full_messages }
        end
    end

    def finishGame
        
    end

    private

    def game_params 
        params.require(:game).permit(:P1_id, :P2_id)
    end
end
