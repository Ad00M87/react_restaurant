Rails.application.routes.draw do
  namespace :api do
    resources :menus, except: [:new, :edit]
  end

  # NO OTHER ROUTES BELOW this
  get '*other', to: 'static#index'
end
