FROM python:3

RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "./merge.py" ]
