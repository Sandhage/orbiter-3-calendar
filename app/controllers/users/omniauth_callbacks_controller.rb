class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end
  
  def twitter
    @user = User.from_omniauth(request.env["omniauth.auth"])
    
    # Since Twitter doesn't give emails, create fake (but unique) email of twitter_username@twitter.com
    username = request.env['omniauth.auth']['extra']['raw_info']['screen_name']
    @user.email = username + '@twitter.com'
    
    
    if @user.save && @user.persisted?
      puts "SUCCESSSUCCESSSUCCESSSUCCESSSUCCESSSUCCESSSUCCESSSUCCESSSUCCESSSUCCESSSUCCESSSUCCESSSUCCESS"
      sign_in_and_redirect @user, :event => :authentication # This will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Twitter") if is_navigational_format?
    else
      puts "FAILUREFAILUREFAILUREFAILUREFAILUREFAILUREFAILUREFAILUREFAILUREFAILUREFAILUREFAILUREFAILURE"
      # session["devise.twitter_data"] = request.env["omniauth.auth"].except("extra")
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to root_path
  end
  
end
