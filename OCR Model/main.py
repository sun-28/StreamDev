import cv2
import os
import pytesseract
from PIL import Image
import time

OUTPUT_FOLDER = "frames"
OUTPUT_TEXT_FILE = "output.txt"
SAVE_INTERVAL_SECONDS = 5

# Create output folder if it doesn't exist
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

def extract_frames_and_perform_ocr(video_url, output_folder, output_text_file, save_interval_seconds):
    cap = cv2.VideoCapture(video_url)
    if not cap.isOpened():
        print('!!! Unable to open URL')
        return

    # Retrieve FPS
    fps = cap.get(cv2.CAP_PROP_FPS)

    frame_count = 0
    while True:
        # Read one frame
        ret, frame = cap.read()

        # Save frame to folder at intervals
        if frame_count % (save_interval_seconds * fps) == 0:
            frame_filename = os.path.join(output_folder, f"frame_{frame_count}.jpg")
            cv2.imwrite(frame_filename, frame)
            print(f"Saved frame {frame_count} to {frame_filename}")

            # Perform OCR on the saved frame
            extracted_text = ocr_image(frame_filename)
            # Write the extracted text to the output file
            write_text_to_file(extracted_text, output_text_file)

        frame_count += 1

        # Check if end of the video stream
        if not ret:
            break

        time.sleep(1 / fps)  # Adding a slight delay

    cap.release()

def ocr_image(image_path):
    # Open the image file
    with Image.open(image_path) as img:
        # Perform OCR
        text = pytesseract.image_to_string(img)
    return text

def write_text_to_file(text, output_file):
    with open(output_file, 'a') as f:
        f.write(text)
        f.write('\n')  # Add a newline between texts for clarity

def main():
    # Take video URL as input from the user
    video_url = input("Enter the video URL: ")
    # video_url = "https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8"
    # Execute the function to extract frames and perform OCR
    extract_frames_and_perform_ocr(video_url, OUTPUT_FOLDER, OUTPUT_TEXT_FILE, SAVE_INTERVAL_SECONDS)

if __name__ == "__main__":
    main()
