Rails.application.routes.draw do
  resources :users
  resources :badges

  root 'users#index'


end
