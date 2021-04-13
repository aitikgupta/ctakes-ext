FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements-dev.txt /code/
RUN pip install -r requirements-dev.txt
COPY . /code/

ENTRYPOINT [ "sh","entrypoint.sh"]
