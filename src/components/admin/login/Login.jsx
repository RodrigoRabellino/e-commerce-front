import "./Login.css"

export default function Login() {
  return (
    <>
       <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" class="sign-in-form">
                <h1 className="title1">LOGO</h1>
              <h2 className="title2">Login Here!..</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="email" name="email" autocomplete="email" placeholder="E-mail" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name="contraseña" autocomplete="current-password" placeholder="Password" id="id_password" />
               
              </div>
            
              <a className="pass" href="#">Forgot your password?</a>
              <input type="submit" value="Sign in" class="btn solid"/>
             
            </form>
          
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>You don't have an account?</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
              <button className="btn transparent" id="sign-up-btn">Register</button>
            </div>
            <img src="img/log.svg" className="image" alt=""/>
          </div>
    
          <div className="panel right-panel">
            <div className="content">
              <h3>Already have an account?</h3>
              <button className="btn transparent" id="sign-in-btn">Sign in</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
