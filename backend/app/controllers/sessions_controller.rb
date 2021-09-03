class SessionsController < ApplicationController

    def create
        user1 = User.find_by(username: params[user][:username1]) 
        user2 = User.find_by(username: params[user][:username2])
byebug
        if (user1.authenticate(params[user][:password1]) && user2.authenticate(params[user][:password2]))
            seesion[:user_id] = user1.id
            render json: {P1: user1, P2: user2}
        else
             alert('try again or click sign up')
        end
    end


    def destroy
        session.clear
    end
    
end