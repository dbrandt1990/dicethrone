class Api::GameController < ApplicationController

    def create
       p1 = User.find_by(username: params[:P1].strip)
       p2 = User.find_by(username: params[:P2].strip)

       if p1 && p2
         game = Game.new(P1_username: p1.username, P1_id: p1.id, P2_username: p2.username, P2_id: p2.id)
            if game.save
                render json: {status: :created, game: game}
            else
                render json: {status:500, errors: game.errors.full_messages }
            end
        end
    end

    def finishGame
        
    end
end
