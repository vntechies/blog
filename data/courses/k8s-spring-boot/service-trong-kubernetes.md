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

Trong Kubernetes có một đối tượng gọi là "Service" sẽ giúp các ứng dụng bên trong và ngoài cụm Kubernetes tương tác với nhau mà không cần tương tác trực tiếp với các pod của các ứng dụng.

## 2. Service trong Kubernetes là gì?

Service là một đối tượng trong Kubernetes. Service sẽ đứng phía trước các pod của hai ứng dụng và khi các ứng dụng cần tương tác với nhau thì sẽ tương tác thông qua object Service. Những thông tin của Service (địa chỉ IP, DNS và port) sẽ KHÔNG bị thay đổi dù cho các pod của hai ứng dụng có thể tăng/giảm số lượng, khi thực hiện update, rollback,... Service còn thực hiện load-balances (phân tải) các request vào các pod (round robin). Kubernetes hỗ trợ các loại service như: **ClusterIP**, **NodePort**, **LoadBalancer**.

Bạn có thể tìm hiểu thêm về object Service [tại trang web chính thức của Kubernetes](https://kubernetes.io/docs/concepts/services-networking/service/).

## 3. Truy ứng dụng từ bên trong cụm Kubernetes

![Service trong Kubernetes](/static/images/assets/service-k8s-1.png)

_Credit: Internet_

Kubernetes hỗ trợ loại service là **ClusterIP Service**, loại Service này sẽ là loại mặc định khi triển khai. ClusterIP Service có một số đặc điểm như:

- Khi triển khai sẽ có địa chỉ IP và port (chỉ có thể dùng để truy cập trong nội bộ cụm Kubernetes). Địa chỉ IP và port của Service sẽ không bị thay đổi cho dù các pod của ứng dụng đứng phía sau thay đổi. Nhưng nếu xóa Service đi triển khai lại thì Service sẽ được gắn với địa chỉ IP mới.
- Kubernetes đăng ký một DNS giống với tên của Service, có thể sử dụng Service Name này để truy cập đến ứng dụng từ bên trong cụm Kubernetes thay vì sử dụng CLUSTER-IP và PORT.

### 3.1 Tạo ClusterIP Service bằng YAML file

```yaml
apiVersion: v1
kind: Service
metadata:
  name: student-management
  namespace: default
spec:
  selector:
    app: student-management
  type: ClusterIP
  ports:
    - port: 80
      targetPort: 8080
```

Các thành phần của ClusterIP Service:

| Tên             | Định nghĩa                                                                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiVersion`    | Version của Kubernetes API mà bạn sử dụng để tạo object/resource, ở đây là v1.                                                                                                                                                                                   |
| `kind`          | Loại object/resource của Kubernetes, ở file trên là `Service`.                                                                                                                                                                                                   |
| `metadata`      | Các thông tin như: name, labels, namespace và các thông tin khác của object/resource. Ở file trên, tên của Service là: `name: student-management` và Service sẽ được tạo ở `namespace: default`.                                                                 |
| `spec`          | Mô tả các thành phần của Service như: selector, type và ports.                                                                                                                                                                                                   |
| `spec.selector` | Mô tả các labels selector mà Service sẽ dùng để tìm pod có cùng labels. Ở trên Service sẽ tìm các pod có labels là: `app: student-management`.                                                                                                                   |
| `spec.type`     | Mô tả loại của Service. Ở trên loại Service là: `type: ClusterIP`.                                                                                                                                                                                               |
| `spec.ports`    | Mô tả các port của Service có và mapping giữa port của Service và port của ứng dụng. Ở trên thì port của service là: `port: 80` và port của ứng dụng là: `targetPort: 8080`. Khi request đến port 80 của Service thì sẽ được forward đến port 8080 của ứng dụng. |

### 3.2 Triển khai ClusterIP Service trên Kubernetes

1. Tạo Service sử dụng lệnh: `kubectl apply -f <Đường dẫn file cấu hình Service>`:

```shell
kubectl apply -f student-clusterIP-svc.yaml
service/student-management created
```

2. Lấy danh sách các service và pod trên namespace default:

```shell
# Lấy danh sách các service:
kubectl get svc -o wide
NAME                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)   AGE     SELECTOR
student-management   ClusterIP   10.152.183.48   <none>        80/TCP    2m26s   app=student-management

# Lấy danh sách Pods:
kubectl get pods --show-labels
NAME                                  READY   STATUS    RESTARTS   AGE     LABELS
student-management-5686b86f6d-rzjsj   1/1     Running   0          2m11s   app=student-management,pod-template-hash=5686b86f6d
student-management-5686b86f6d-npsfl   1/1     Running   0          2m11s   app=student-management,pod-template-hash=5686b86f6d
student-management-5686b86f6d-vjcv6   1/1     Running   0          2m11s   app=student-management,pod-template-hash=5686b86f6d
```

3. Truy cập ứng dụng sử dụng CLUSTER-IP và PORT của Service:

```shell
curl --location --request GET '10.152.183.48:80/api/students'

[{"id":"9e4c5c7c-298f-4984-ad41-3181947437ec","fullName":"NGUYEN BA THANH","dateOfBirth":"29/04/1998","hometown":"DUONG NOI, HA DONG, HA NOI","gender":"MALE"},{"id":"1e433cb8-f45a-47cd-a59c-0175047b2e13","fullName":"HA QUANG MAU","dateOfBirth":"01/01/2006","hometown":"HA NOI","gender":"MALE"}]

# Khi gọi API và thấy trả về dữ liệu, như vậy là đã có thể truy cập ứng dụng thông qua CLUSTER-IP và PORT của Service.
```

4. Truy cập ứng dụng sử dụng DNS của Service:

Sử dụng ServiceName để gọi ứng dụng trong nội bộ cụm Kubernetes, các ứng dụng này cùng hoặc khác namespace. Sử dụng format này để gọi các ứng dụng cùng hoặc khác namespace: `<Tên Service>.<Tên namespace>.svc.cluster.local`. Nếu các ứng dụng cùng namespace thì chỉ cần sử dụng tên service.

```shell
curl --location --request GET 'http://student-management/api/students'

[{"id":"8b98b13c-68b2-49b8-bf36-579a7ddf1adb","fullName":"NGUYEN BA THANH","dateOfBirth":"29/04/1998","hometown":"DUONG NOI, HA DONG, HA NOI","gender":"MALE"},{"id":"5afc7482-68b5-4114-8333-111493c423f4","fullName":"HA QUANG MAU","dateOfBirth":"01/01/2006","hometown":"HA NOI","gender":"MALE"}]
```

Trong seri này mình sử dụng MicroK8s để tạo Kubernetes Cluster. Để tương tác được ứng dụng bằng ServiceName hãy đảm bảo rằng bạn đã enable DNS. Bạn có thể tham khảo [hướng dẫn này](https://microk8s.io/docs/addon-dns).

## 4. Truy cập ứng dụng từ bên ngoài cụm Kubernetes với NodePort Service

Kubernetes hỗ trợ loại Service khác gọi là **NodePort Service**. Điểm giống và khác nhau giữa ClusterIP Service và NodePort Service là:

- Giống nhau: NodePort Service cũng sẽ có CLUSTER-IP, PORT và DNS giống như ClusterIP Service nên là với NodePort Service thì vẫn có thể truy cập ứng dụng từ bên trong cụm Kubernetes.
- Khác nhau: NodePort Service có thêm một port nữa gọi là _NodePort_ và có thể truy cập ứng dụng từ bên ngoài cụm Kubernetes. NodePort này sẽ được random từ 30000-32767 (nếu không được chỉ định cụ thể).

### 4.1 Tạo NodePort Service bằng YAML file

```yaml
apiVersion: v1
kind: Service
metadata:
  name: student-management
  namespace: default
spec:
  selector:
    app: student-management
  type: NodePort
  ports:
    - port: 80
      targetPort: 8080
      nodePort: 32000
```

Các thành phần của NodePort Service:

| Tên                     | Định nghĩa                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spec.type`             | Mô tả loại của Service. Ở đây loại Service là: `type: NodePort`.                                                                                                                      |
| `spec.ports.port`       | Mô tả port của Service mà được sử dụng để gọi trong nội bộ cụm Kubernetes. Ở đây Service `student-management` đang chạy ở port 80.                                                    |
| `spec.ports.targetPort` | Mô tả port của container ứng dụng sử dụng. Ở đây thì container ứng dụng đang chạy ở port 8080.                                                                                        |
| `spec.ports.nodePort`   | Mô tả _NodePort_ mà Service expose để ứng dụng có thể truy cập từ bên ngoài. Ở đây `nodePort: 32000` thì Service sẽ expose port 32000 (nếu không mô tả thì sẽ random từ 30000-32767). |

### 4.2 Triển khai NodePort Service trên Kubernetes

1. Tạo Service sử dụng lệnh: `kubectl apply -f <Đường dẫn file cấu hình Service>`:

```shell
kubectl apply -f student-nodeport-svc.yaml
service/student-management created
```

2. Lấy danh sách các service và pod trên namespace default:

```shell
# Lấy danh sách pods:
NAME                                      READY   STATUS    RESTARTS        AGE
pod/student-management-5686b86f6d-94sqc   1/1     Running   0               70s
pod/student-management-5686b86f6d-gzjdk   1/1     Running   0               70s
pod/student-management-5686b86f6d-s86np   1/1     Running   0               70s

# Lấy danh sách Service:
NAME                         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/student-management   NodePort    10.152.183.70   <none>        80:32000/TCP   19s

# Service Type: NodePort
# PORT(S): 80:32000/TCP. Port 32000 sẽ expose ra bên ngoài cụm Kubernetes. Bên ngoài cụm Kubernetes có thể dùng port này để truy cập ứng dụng.
```

3. Truy cập ứng dụng từ bên trong cụm Kubernetes:

```shell
# 1. Truy cập ứng dụng sử dụng ClusterIP và PORT của Service:
/ $ curl --location --request GET '10.152.183.70:80/api/students'
[{"id":"231e55db-3c97-4307-9780-2b1fc8692d99","fullName":"NGUYEN BA THANH","dateOfBirth":"29/04/1998","hometown":"DUONG NOI, HA DONG, HA NOI","gender":"MALE"},{"id":"890def03-6f74-4b5a-b534-c65802354d75","fullName":"HA QUANG MAU","dateOfBirth":"01/01/2006","hometown":"HA NOI","gender":"MALE"}]

# 2. Truy cập ứng dụng sử dụng DNS của Service:
/ $ curl --location --request GET 'student-management/api/students'
[{"id":"231e55db-3c97-4307-9780-2b1fc8692d99","fullName":"NGUYEN BA THANH","dateOfBirth":"29/04/1998","hometown":"DUONG NOI, HA DONG, HA NOI","gender":"MALE"},{"id":"890def03-6f74-4b5a-b534-c65802354d75","fullName":"HA QUANG MAU","dateOfBirth":"01/01/2006","hometown":"HA NOI","gender":"MALE"}]
```

4. Truy cập ứng dụng từ bên ngoài cụm Kubernetes sử dụng NodePort:

```shell
curl --location --request GET 'localhost:32000/api/students'

[{"id":"231e55db-3c97-4307-9780-2b1fc8692d99","fullName":"NGUYEN BA THANH","dateOfBirth":"29/04/1998","hometown":"DUONG NOI, HA DONG, HA NOI","gender":"MALE"},{"id":"890def03-6f74-4b5a-b534-c65802354d75","fullName":"HA QUANG MAU","dateOfBirth":"01/01/2006","hometown":"HA NOI","gender":"MALE"}]
```
