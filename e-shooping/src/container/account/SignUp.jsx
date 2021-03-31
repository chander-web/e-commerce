

const SignUpView = () => {
    return (
        <form>
            <div className="container my-3">
                <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block" >
                    <div className="mb-3">
                        <label for="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="mb-3">
                        <label for="phoneNum" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="phoneNum" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-3">Submit</button>
                </div>
            </div>
        </form>

    );
};

export default SignUpView;
