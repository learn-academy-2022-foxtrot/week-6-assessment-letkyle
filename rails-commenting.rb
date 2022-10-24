# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the logic center of the app, it coordinates user interaction.
class BlogPostsController < ApplicationController
  def index
    # ---2) index allows you to access all the items within the database you then need to add an index.html.erb page it is important that the file name matches the controller for it to map through.
    @posts = BlogPost.all
  end

  # ---3) show is a restful route that looks for a single item in a database by grabbing it with the id. You will need to go into the routes.rb and use a getter method in order for it to show. You also have to create an .erb html file for it to render.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) New is a restful route that users can add information to on the app which will go into a box, which will then add it to the database. You also have to have a .erb file.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) create is a restful route that will submit the user data to the database. You will need to add it in your routes.rb
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This allows you to fill out a form to edit an existing blog and you will need a button for submit you will need to add a route and an .erb file
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) After edit, you will need an update this will update the current blogs with the updated or edited version of your desire. you need a to add this to the routes.rb
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) destroy deletes a blog post, you will need a route and add an onclick button for the delete. you will need to add this to your routes.rb
      redirect_to blog_posts_path
    end
  end

  # ---9) private protects privacy and allows the user to only see what is meant to be seen. Anything below this will be private you will not be able to access. They will not be able to be called anywhere else in the app.
  private
  def blog_post_params
    # ---10) in this params, we have require and permit. It requires specific attributes passed in to create or update the blog post, permit allows certain items to be present or not. attributes that arent listed in the params will not be allowed.
    params.require(:blog_post).permit(:title, :content)
  end
end
