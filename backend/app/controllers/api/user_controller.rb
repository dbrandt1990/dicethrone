class Api::UserController < ApplicationController

    def create 
        @user = User.new(user_params)
        # idk wtf is going on here syntax errors, and unable to get anything to return from this other than the else 
        if @user.save 
            return json: {status: :created, user: @user}
        else
            return json: {status:500, user: @user.errors.full_messages }
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
        params.require(:user).permit(:username, :password)
    end
end
