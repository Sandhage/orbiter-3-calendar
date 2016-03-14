class AdminController < ApplicationController
    def admin_dashboard 
        if user_signed_in? 
            if !current_user.admin
                redirect_to root_path
            end
        else
            redirect_to root_path
        end
    end
end
