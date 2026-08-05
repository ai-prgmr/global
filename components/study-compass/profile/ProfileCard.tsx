"use client";

import ProfileField from "./ProfileField";

export default function ProfileCard() {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">

            <h3 className="mb-4 text-lg font-semibold">
                Study Profile
            </h3>

            <ProfileField
                label="Name"
                completed
            />

            <ProfileField
                label="Email"
                completed={false}
            />

            <ProfileField
                label="Phone"
                completed={false}
            />

            <ProfileField
                label="Destination"
                completed={false}
            />

            <ProfileField
                label="Course"
                completed={false}
            />

            <ProfileField
                label="Budget"
                completed={false}
            />

            <ProfileField
                label="English Test"
                completed={false}
            />

            <ProfileField
                label="Passport"
                completed={false}
            />

        </div>
    );
}