import React from "react";
import MainContent from "@/components/MainContent/mainContent";
import LoginLayout from "@/components/LoginLayout/loginLayout";
import Login from "@/components/Login/login";

export default function LoginPage() {
    return (
        <LoginLayout>
            <div>
                <h1>Mindbook</h1><br />
                <p>Comparte lo que piensas con tus amigos y familia. Divierte, explora y contrata a un peruano.</p>
            </div>
            <Login/>
        </LoginLayout>
    )
}