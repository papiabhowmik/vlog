import { BLOG_DATA, LOGIN_USER } from "./actions";
const initialState={
   blogs:[
      {
          "id": 1,
          "title": "Transform your winter blues into winter creativity",
          "content": "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.",
          "img": "https://static.wixstatic.com/media/75059a_cf2c39f511b6478eaea5b4f7713831c0~mv2.jpg/v1/fill/w_523,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75059a_cf2c39f511b6478eaea5b4f7713831c0~mv2.jpg",
          "inspiration": "To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!",
          "design_with_ease": "“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.” "
      },
      {
          "id": 2,
          "title": "5 reasons to wake up at 5am",
          "content": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. ",
          "img": "https://static.wixstatic.com/media/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.jpg/v1/fill/w_523,h_685,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.jpg",
          "inspiration": "To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!",
          "design_with_ease": "Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone."
      },
      {
          "id": 3,
          "title": "When expecting, expect the unexpected",
          "content": "Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier. Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. ",
          "img": "https://static.wixstatic.com/media/75059a_9f8cd2f1282c4dc7ae9a4bea155e2661~mv2.jpg",
          "inspiration": "To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!",
          "design_with_ease": "“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.” "
      },
      {
        "id": 4,
        "title": "Transform your winter blues into winter creativity",
        "content": "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.",
        "img": "https://static.wixstatic.com/media/75059a_cf2c39f511b6478eaea5b4f7713831c0~mv2.jpg/v1/fill/w_523,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75059a_cf2c39f511b6478eaea5b4f7713831c0~mv2.jpg",
        "inspiration": "To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!",
        "design_with_ease": "“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.” "
    },
    {
        "id": 5,
        "title": "5 reasons to wake up at 5am",
        "content": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. ",
        "img": "https://static.wixstatic.com/media/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.jpg/v1/fill/w_523,h_685,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.jpg",
        "inspiration": "To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!",
        "design_with_ease": "Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone."
    },
    {
        "id": 6,
        "title": "When expecting, expect the unexpected",
        "content": "Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier. Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. ",
        "img": "https://static.wixstatic.com/media/75059a_9f8cd2f1282c4dc7ae9a4bea155e2661~mv2.jpg",
        "inspiration": "To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!",
        "design_with_ease": "“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.” "
    }
  ],
  isUserLogin: false,

}

const userReducers=(state=initialState, action)=> {
   switch(action.type){
      case LOGIN_USER: {
         return {
            ...state,
            isUserLogin: action.payload
         }
      }

    
      default: {
         return state;
      }
   }
}

export default userReducers;