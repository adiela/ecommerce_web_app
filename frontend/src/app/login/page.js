export default function Login() {
    return (
        <div>
            <h1>login</h1>
            <form class="form-example">
                <fieldset class="form-example">
                    <label for="name">Enter your name: </label>
                    <input type="text" name="name" id="name" required />
                </fieldset>
                <fieldset class="form-example">
                    <label for="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required />
                </fieldset>
                <fieldset class="form-example">
                    <input type="submit" value="Subscribe!" />
                </fieldset>
            </form>
        </div>
        
    )
}