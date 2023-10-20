import React from "react";
import { Button, Container, Select, TextInput, Textarea } from "react-materialize";

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container margin-100" style={{ marginBottom: '100px' }}>
            <Container>
                <h3>Contact us</h3>
                <form onSubmit={handleSubmit}>
                    <TextInput id="TextInput-38" label="Your Name" />
                    <TextInput id="TextInput-39" label="Your Phone" />
                    <TextInput email id="TextInput-41" label="Email" validate />
                    <Select id="Select-46" multiple={false} onChange={function noRefCheck() { }} value="">
                        <option disabled value="">
                            Choose your favorite film
                        </option>
                        <option value="1">
                            Crash Landing on You
                        </option>
                        <option value="2">
                            Hospital Playlist
                        </option>
                        <option value="3">
                            Squid Game
                        </option>
                        <option value="4">
                            Train To Busan
                        </option>
                        <option value="5">
                            Stranger Things
                        </option>
                        <option value="6">
                            Onmyoji: The Card Game
                        </option>
                        <option value="7">
                            The Old Guard
                        </option>
                        <option value="8">
                            Unholy
                        </option>
                        <option value="9">
                            What Is Wrong With Secretary Kim
                        </option>
                    </Select>
                    <Textarea id="Textarea-28" label="Your Comment" />
                    <Button>Submit</Button>
                </form>
            </Container>
        </div>
    );

}