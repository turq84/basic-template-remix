# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the Nginx configuration file to the container
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose ports 80 and 443 for HTTP and HTTPS traffic
EXPOSE 80 443

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
