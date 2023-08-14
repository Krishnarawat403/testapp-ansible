Check the SSh-passwordless to the remote server.
after writing the yml makse sure that map the host port to the local host 5000 of the webserver running on aws by the following command:
ssh -i "C:\Users\krish\Downloads\keylicious.pem" -N -L 5000:localhost:5000 ubuntu@18.223.195.192
