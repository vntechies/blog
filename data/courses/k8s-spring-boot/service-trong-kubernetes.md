---
title: Service trong Kubernetes
date: '2022-12-10'
tags: ['api', 'rest-api', 'springboot', 'kubernetes']
series: ['k8s-spring-boot']
draft: false
authors: ['thanhnb']
images: ['/static/images/ogps/k8s-springboot.png']
summary: 'Trong bài này chúng ta sẽ tìm hiểu về Service, cách truy cập ứng dụng từ bên ngoài cụm Kubernetes và cách các ứng dụng kết nối, liên lạc với nhau bên trong cụm Kubernetes.'
index: 4
---

<TOCInline toc={props.toc} asDisclosure />

## 1. Giới thiệu chung

Ở bài [trước](/courses/k8s-spring-boot/quan-ly-pod-voi-replicationController-deployment) chúng ta đã tìm hiểu cách triển khai ứng dụng và quản lý các pod của ứng dụng thông qua ReplicationController và Deployment. Mỗi pod đều sẽ có một địa chỉ IP và địa chỉ IP này sẽ thay đổi nếu pod được tạo lại. Nếu dùng địa chỉ IP của pod để cấu hình các ứng dụng thì sẽ không ổn vì:

- Mỗi khi pod bị xóa và tạo lại thì pod sẽ được gắn với một đia chỉ IP mới. Nên nếu mà fix cứng địa chỉ IP của Pod để cấu hình ứng dụng thì sẽ bị sai nếu pod bị xóa đi và tạo lại.
- Một ứng dụng có thể được chạy bởi nhiều pod, các ứng dụng này có thể tăng hoặc giảm số lượng pod mà mỗi pod lại được assign một địa chỉ IP riêng.

Chúng ta mong muốn Client thì không nên cần quan tâm về một số lượng pod và địa chỉ IP của chúng. Thay vì đó nên có phải có một thứ gì đó mình tạm gọi là X (địa chỉ IP, port và DNS thì stable) đứng trước các pod và Client chỉ quan tâm đến X mà không cần quan tâm đến số lượng pod và địa chỉ IP của pod.

## 2. Service trong Kubernetes là gì?
