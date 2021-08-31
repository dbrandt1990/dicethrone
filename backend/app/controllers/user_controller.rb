class UserController < ApplicationController

    def create 
        user = User.new(user_params)

        if user.save 
            session[:user_id] = user.id
        else
            alert('there was an issue creating user')
        end
    end
    def delete
    end
    def calculateRank
        
    end

    private 

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
