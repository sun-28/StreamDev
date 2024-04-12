import openai

openai.api_key = ''

def generate_text(prompt, max_tokens=50, temperature=0.7):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a friendly AI."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=max_tokens,
        temperature=temperature
    )
    return response.choices[0].message['content']

def main():
    while True:
        user_prompt = input("Enter your prompt (or type 'exit' to quit): ")
        if user_prompt.lower() == 'exit':
            break
        generated_text = generate_text(user_prompt)
        print("Generated Text:")
        print(generated_text)

if __name__ == "__main__":
    main()
