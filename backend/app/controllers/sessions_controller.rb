class SessionsController < ApplicationController

    def login
        user = User.find_by(username: params[user][:username]) 

        if user.authenticate(params[user][:password])
            session[:user_id] = user.id   
        else alert('try again or click sign up')
    end


    def destroy
        session.clear
    end
    
end