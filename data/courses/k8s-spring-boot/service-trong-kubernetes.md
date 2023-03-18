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

Ở bài [trước](/courses/k8s-spring-boot/quan-ly-pod-voi-replicationController-deployment), chúng ta đã tìm hiểu cách triển khai ứng dụng và quản lý các pod của ứng dụng thông qua ReplicationController và Deployment. Có vấn đề thế này, thường trong một hệ thống sẽ có rất nhiều những ứng dụng cùng hoạt động. Giả sử mỗi ứng dụng sẽ được triển khai trên nhiều pod (có thể tăng/giảm số lượng pod linh hoạt), làm cách nào để các ứng dụng này có thể tương tác với nhau mà không cần quan tâm đến số lượng pod cũng như địa chỉ IP của chúng (vì địa chỉ IP của pod là KHÔNG cố định, có thể bị thay đổi).

Chúng ta mong muốn rằng có một thứ gì đó đứng phía trước các pod của ứng dụng (mình tạm gọi là "X"). Đối tượng "X" này phải có địa chỉ IP không bị thay đổi khi các pod phía sau thay đổi, và các ứng dụng khi tương tác với nhau thay vì tương tác trực tiếp với các pod của ứng dụng thì sẽ tương tác với "X".

Trong Kubernetes có một đối tượng gọi là "Service" sẽ giúp các ứng dụng bên trong cụm Kubernetes tương tác với nhau mà không cần tương tác trực tiếp với các pod của các ứng dụng.

## 2. Service trong Kubernetes là gì?

![Service trong Kubernetes](/static/images/assets/service-k8s-1.png)

_Credit: Internet_

Service là một đối tượng trong Kubernetes. Service sẽ đứng phía trước các pod của hai ứng dụng và khi các ứng dụng cần tương tác với nhau thì sẽ tương tác thông qua object Service. Những thông tin của Service (địa chỉ IP, DNS và port) sẽ KHÔNG bị thay đổi dù cho các pod của hai ứng dụng có thể tăng/giảm số lượng, khi thực hiện update, rollback,... Service còn thực hiện load-balances (phân tải) các request vào các pod (round robin). Kubernetes hỗ trợ các loại service như: **ClusterIP**, **NodePort**, **LoadBalancer**.

Bạn có thể tìm hiểu thêm về object Service [tại trang web chính thức của Kubernetes](https://kubernetes.io/docs/concepts/services-networking/service/).

## 3. Truy ứng dụng từ bên trong cụm Kubernetes

### 3.1 Tạo Service bằng file YAML

```yaml

```

## 4. Truy cập ứng dụng từ bên ngoài cụm Kubernetes

### 4.1 Tạo Service bằng file YAML
