import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/authContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (username, password) => {
		// Only check errors when the form is submitted
		if (!handleInputErrors(username, password)) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

export default useLogin;

// Helper function to validate inputs
function handleInputErrors(username, password) {
	// Display the error only when both fields are empty on submission
	if (!username && !password) {
		toast.error("Please fill in all fields");
		return false;
	} else if (!username) {
		toast.error("Username is required");
		return false;
	} else if (!password) {
		toast.error("Password is required");
		return false;
	}

	return true;
}
