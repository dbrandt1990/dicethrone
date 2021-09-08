class Api::UserController < ApplicationController

    
    def self.findUsers(user1,user2)
        a = User.find_by(username: user1)
        b = User.find_by(username: user2)

        return {user1: a, user2: b}
    end

    def create 
        user = User.new(user_params)
        # byebug
        if user.save 
            render json: {status: :created, user: user}
        else
            render json: {status:500, errors: user.errors.full_messages }
        end
    end


    def delete
    end

    def calculateRank
        let ratios = {}
        User.all.each do |user|
           let ratio = user.wins/user.losses
           ratios[user.id] = ratio
        end
        # find a way to sort the obj 
        # maybe use existing ranks and check ones that are close
    end

    private 

    def user_params
        params.require(:user).permit(:username, :password_digest)
    end
end
