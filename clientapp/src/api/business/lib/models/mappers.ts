/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const Like: msRest.CompositeMapper = {
  serializedName: "Like",
  type: {
    name: "Composite",
    className: "Like",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "updatedAt",
        type: {
          name: "DateTime"
        }
      },
      postId: {
        serializedName: "postId",
        type: {
          name: "Uuid"
        }
      },
      post: {
        serializedName: "post",
        type: {
          name: "Composite",
          className: "Post"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "User"
        }
      }
    }
  }
};

export const Post: msRest.CompositeMapper = {
  serializedName: "Post",
  type: {
    name: "Composite",
    className: "Post",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "updatedAt",
        type: {
          name: "DateTime"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "User"
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Comment"
            }
          }
        }
      },
      likes: {
        serializedName: "likes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Like"
            }
          }
        }
      }
    }
  }
};

export const Event: msRest.CompositeMapper = {
  serializedName: "Event",
  type: {
    name: "Composite",
    className: "Event",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "updatedAt",
        type: {
          name: "DateTime"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "String"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "User"
        }
      }
    }
  }
};

export const UserFile: msRest.CompositeMapper = {
  serializedName: "UserFile",
  type: {
    name: "Composite",
    className: "UserFile",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "updatedAt",
        type: {
          name: "DateTime"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "User"
        }
      }
    }
  }
};

export const FeedBack: msRest.CompositeMapper = {
  serializedName: "FeedBack",
  type: {
    name: "Composite",
    className: "FeedBack",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "updatedAt",
        type: {
          name: "DateTime"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      rating: {
        serializedName: "rating",
        type: {
          name: "Number"
        }
      },
      typeOfAppreciation: {
        serializedName: "typeOfAppreciation",
        type: {
          name: "String"
        }
      },
      isUserExperienceEnjoyable: {
        serializedName: "isUserExperienceEnjoyable",
        type: {
          name: "Boolean"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "User"
        }
      }
    }
  }
};

export const User: msRest.CompositeMapper = {
  serializedName: "User",
  type: {
    name: "Composite",
    className: "User",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "updatedAt",
        type: {
          name: "DateTime"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        type: {
          name: "String"
        }
      },
      posts: {
        serializedName: "posts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Post"
            }
          }
        }
      },
      likes: {
        serializedName: "likes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Like"
            }
          }
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Comment"
            }
          }
        }
      },
      events: {
        serializedName: "events",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Event"
            }
          }
        }
      },
      userFiles: {
        serializedName: "userFiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UserFile"
            }
          }
        }
      },
      feedbacks: {
        serializedName: "feedbacks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FeedBack"
            }
          }
        }
      }
    }
  }
};

export const Comment: msRest.CompositeMapper = {
  serializedName: "Comment",
  type: {
    name: "Composite",
    className: "Comment",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "updatedAt",
        type: {
          name: "DateTime"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "User"
        }
      },
      postId: {
        serializedName: "postId",
        type: {
          name: "Uuid"
        }
      },
      post: {
        serializedName: "post",
        type: {
          name: "Composite",
          className: "Post"
        }
      }
    }
  }
};

export const CommentAddDTO: msRest.CompositeMapper = {
  serializedName: "CommentAddDTO",
  type: {
    name: "Composite",
    className: "CommentAddDTO",
    modelProperties: {
      postId: {
        serializedName: "postId",
        type: {
          name: "Uuid"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LikeDTO: msRest.CompositeMapper = {
  serializedName: "LikeDTO",
  type: {
    name: "Composite",
    className: "LikeDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "UserDTO"
        }
      },
      post: {
        serializedName: "post",
        type: {
          name: "Composite",
          className: "PostDTO"
        }
      }
    }
  }
};

export const PostDTO: msRest.CompositeMapper = {
  serializedName: "PostDTO",
  type: {
    name: "Composite",
    className: "PostDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "UserDTO"
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommentDTO"
            }
          }
        }
      },
      likes: {
        serializedName: "likes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LikeDTO"
            }
          }
        }
      }
    }
  }
};

export const EventDTO: msRest.CompositeMapper = {
  serializedName: "EventDTO",
  type: {
    name: "Composite",
    className: "EventDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "UserDTO"
        }
      }
    }
  }
};

export const FeedbackDTO: msRest.CompositeMapper = {
  serializedName: "FeedbackDTO",
  type: {
    name: "Composite",
    className: "FeedbackDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      rating: {
        serializedName: "rating",
        type: {
          name: "Number"
        }
      },
      typeOfAppreciation: {
        serializedName: "typeOfAppreciation",
        type: {
          name: "String"
        }
      },
      isUserExperienceEnjoyable: {
        serializedName: "isUserExperienceEnjoyable",
        type: {
          name: "Boolean"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "UserDTO"
        }
      }
    }
  }
};

export const UserDTO: msRest.CompositeMapper = {
  serializedName: "UserDTO",
  type: {
    name: "Composite",
    className: "UserDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        type: {
          name: "String"
        }
      },
      posts: {
        serializedName: "posts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PostDTO"
            }
          }
        }
      },
      likes: {
        serializedName: "likes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LikeDTO"
            }
          }
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommentDTO"
            }
          }
        }
      },
      events: {
        serializedName: "events",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EventDTO"
            }
          }
        }
      },
      feedbacks: {
        serializedName: "feedbacks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FeedbackDTO"
            }
          }
        }
      }
    }
  }
};

export const CommentDTO: msRest.CompositeMapper = {
  serializedName: "CommentDTO",
  type: {
    name: "Composite",
    className: "CommentDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "UserDTO"
        }
      },
      post: {
        serializedName: "post",
        type: {
          name: "Composite",
          className: "PostDTO"
        }
      }
    }
  }
};

export const ErrorMessage: msRest.CompositeMapper = {
  serializedName: "ErrorMessage",
  type: {
    name: "Composite",
    className: "ErrorMessage",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommentDTOListRequestResponse: msRest.CompositeMapper = {
  serializedName: "CommentDTOListRequestResponse",
  type: {
    name: "Composite",
    className: "CommentDTOListRequestResponse",
    modelProperties: {
      response: {
        readOnly: true,
        serializedName: "response",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommentDTO"
            }
          }
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const CommentDTORequestResponse: msRest.CompositeMapper = {
  serializedName: "CommentDTORequestResponse",
  type: {
    name: "Composite",
    className: "CommentDTORequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "CommentDTO"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const CommentUpdateDTO: msRest.CompositeMapper = {
  serializedName: "CommentUpdateDTO",
  type: {
    name: "Composite",
    className: "CommentUpdateDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      postId: {
        serializedName: "postId",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventAddDTO: msRest.CompositeMapper = {
  serializedName: "EventAddDTO",
  type: {
    name: "Composite",
    className: "EventAddDTO",
    modelProperties: {
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventDTOPagedResponse: msRest.CompositeMapper = {
  serializedName: "EventDTOPagedResponse",
  type: {
    name: "Composite",
    className: "EventDTOPagedResponse",
    modelProperties: {
      page: {
        serializedName: "page",
        type: {
          name: "Number"
        }
      },
      pageSize: {
        serializedName: "pageSize",
        type: {
          name: "Number"
        }
      },
      totalCount: {
        serializedName: "totalCount",
        type: {
          name: "Number"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EventDTO"
            }
          }
        }
      }
    }
  }
};

export const EventDTOPagedResponseRequestResponse: msRest.CompositeMapper = {
  serializedName: "EventDTOPagedResponseRequestResponse",
  type: {
    name: "Composite",
    className: "EventDTOPagedResponseRequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "EventDTOPagedResponse"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const EventDTORequestResponse: msRest.CompositeMapper = {
  serializedName: "EventDTORequestResponse",
  type: {
    name: "Composite",
    className: "EventDTORequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "EventDTO"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const EventUpdateDTO: msRest.CompositeMapper = {
  serializedName: "EventUpdateDTO",
  type: {
    name: "Composite",
    className: "EventUpdateDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FeedbackAddDTO: msRest.CompositeMapper = {
  serializedName: "FeedbackAddDTO",
  type: {
    name: "Composite",
    className: "FeedbackAddDTO",
    modelProperties: {
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      rating: {
        serializedName: "rating",
        type: {
          name: "Number"
        }
      },
      typeOfAppreciation: {
        serializedName: "typeOfAppreciation",
        type: {
          name: "String"
        }
      },
      isUserExperienceEnjoyable: {
        serializedName: "isUserExperienceEnjoyable",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const FeedbackDTOPagedResponse: msRest.CompositeMapper = {
  serializedName: "FeedbackDTOPagedResponse",
  type: {
    name: "Composite",
    className: "FeedbackDTOPagedResponse",
    modelProperties: {
      page: {
        serializedName: "page",
        type: {
          name: "Number"
        }
      },
      pageSize: {
        serializedName: "pageSize",
        type: {
          name: "Number"
        }
      },
      totalCount: {
        serializedName: "totalCount",
        type: {
          name: "Number"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FeedbackDTO"
            }
          }
        }
      }
    }
  }
};

export const FeedbackDTOPagedResponseRequestResponse: msRest.CompositeMapper = {
  serializedName: "FeedbackDTOPagedResponseRequestResponse",
  type: {
    name: "Composite",
    className: "FeedbackDTOPagedResponseRequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "FeedbackDTOPagedResponse"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const FeedbackDTORequestResponse: msRest.CompositeMapper = {
  serializedName: "FeedbackDTORequestResponse",
  type: {
    name: "Composite",
    className: "FeedbackDTORequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "FeedbackDTO"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const FeedbackUpdateDTO: msRest.CompositeMapper = {
  serializedName: "FeedbackUpdateDTO",
  type: {
    name: "Composite",
    className: "FeedbackUpdateDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      rating: {
        serializedName: "rating",
        type: {
          name: "Number"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      typeOfAppreciation: {
        serializedName: "typeOfAppreciation",
        type: {
          name: "String"
        }
      },
      isUserExperienceEnjoyable: {
        serializedName: "isUserExperienceEnjoyable",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Int32RequestResponse: msRest.CompositeMapper = {
  serializedName: "Int32RequestResponse",
  type: {
    name: "Composite",
    className: "Int32RequestResponse",
    modelProperties: {
      response: {
        readOnly: true,
        serializedName: "response",
        type: {
          name: "Number"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const LikeAddDTO: msRest.CompositeMapper = {
  serializedName: "LikeAddDTO",
  type: {
    name: "Composite",
    className: "LikeAddDTO",
    modelProperties: {
      postId: {
        serializedName: "postId",
        type: {
          name: "Uuid"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const LikeDTOListRequestResponse: msRest.CompositeMapper = {
  serializedName: "LikeDTOListRequestResponse",
  type: {
    name: "Composite",
    className: "LikeDTOListRequestResponse",
    modelProperties: {
      response: {
        readOnly: true,
        serializedName: "response",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LikeDTO"
            }
          }
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const LikeDTORequestResponse: msRest.CompositeMapper = {
  serializedName: "LikeDTORequestResponse",
  type: {
    name: "Composite",
    className: "LikeDTORequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "LikeDTO"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const LoginDTO: msRest.CompositeMapper = {
  serializedName: "LoginDTO",
  type: {
    name: "Composite",
    className: "LoginDTO",
    modelProperties: {
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LoginResponseDTO: msRest.CompositeMapper = {
  serializedName: "LoginResponseDTO",
  type: {
    name: "Composite",
    className: "LoginResponseDTO",
    modelProperties: {
      token: {
        serializedName: "token",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "UserDTO"
        }
      }
    }
  }
};

export const LoginResponseDTORequestResponse: msRest.CompositeMapper = {
  serializedName: "LoginResponseDTORequestResponse",
  type: {
    name: "Composite",
    className: "LoginResponseDTORequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "LoginResponseDTO"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const PostAddDTO: msRest.CompositeMapper = {
  serializedName: "PostAddDTO",
  type: {
    name: "Composite",
    className: "PostAddDTO",
    modelProperties: {
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PostDTOPagedResponse: msRest.CompositeMapper = {
  serializedName: "PostDTOPagedResponse",
  type: {
    name: "Composite",
    className: "PostDTOPagedResponse",
    modelProperties: {
      page: {
        serializedName: "page",
        type: {
          name: "Number"
        }
      },
      pageSize: {
        serializedName: "pageSize",
        type: {
          name: "Number"
        }
      },
      totalCount: {
        serializedName: "totalCount",
        type: {
          name: "Number"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PostDTO"
            }
          }
        }
      }
    }
  }
};

export const PostDTOPagedResponseRequestResponse: msRest.CompositeMapper = {
  serializedName: "PostDTOPagedResponseRequestResponse",
  type: {
    name: "Composite",
    className: "PostDTOPagedResponseRequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "PostDTOPagedResponse"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const PostDTORequestResponse: msRest.CompositeMapper = {
  serializedName: "PostDTORequestResponse",
  type: {
    name: "Composite",
    className: "PostDTORequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "PostDTO"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const PostUpdateDTO: msRest.CompositeMapper = {
  serializedName: "PostUpdateDTO",
  type: {
    name: "Composite",
    className: "PostUpdateDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      userId: {
        serializedName: "userId",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const RequestResponse: msRest.CompositeMapper = {
  serializedName: "RequestResponse",
  type: {
    name: "Composite",
    className: "RequestResponse",
    modelProperties: {
      response: {
        readOnly: true,
        serializedName: "response",
        type: {
          name: "String"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const UserAddDTO: msRest.CompositeMapper = {
  serializedName: "UserAddDTO",
  type: {
    name: "Composite",
    className: "UserAddDTO",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserDTOPagedResponse: msRest.CompositeMapper = {
  serializedName: "UserDTOPagedResponse",
  type: {
    name: "Composite",
    className: "UserDTOPagedResponse",
    modelProperties: {
      page: {
        serializedName: "page",
        type: {
          name: "Number"
        }
      },
      pageSize: {
        serializedName: "pageSize",
        type: {
          name: "Number"
        }
      },
      totalCount: {
        serializedName: "totalCount",
        type: {
          name: "Number"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UserDTO"
            }
          }
        }
      }
    }
  }
};

export const UserDTOPagedResponseRequestResponse: msRest.CompositeMapper = {
  serializedName: "UserDTOPagedResponseRequestResponse",
  type: {
    name: "Composite",
    className: "UserDTOPagedResponseRequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "UserDTOPagedResponse"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const UserDTORequestResponse: msRest.CompositeMapper = {
  serializedName: "UserDTORequestResponse",
  type: {
    name: "Composite",
    className: "UserDTORequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "UserDTO"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const UserFileDTO: msRest.CompositeMapper = {
  serializedName: "UserFileDTO",
  type: {
    name: "Composite",
    className: "UserFileDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "UserDTO"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        serializedName: "updatedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const UserFileDTOPagedResponse: msRest.CompositeMapper = {
  serializedName: "UserFileDTOPagedResponse",
  type: {
    name: "Composite",
    className: "UserFileDTOPagedResponse",
    modelProperties: {
      page: {
        serializedName: "page",
        type: {
          name: "Number"
        }
      },
      pageSize: {
        serializedName: "pageSize",
        type: {
          name: "Number"
        }
      },
      totalCount: {
        serializedName: "totalCount",
        type: {
          name: "Number"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UserFileDTO"
            }
          }
        }
      }
    }
  }
};

export const UserFileDTOPagedResponseRequestResponse: msRest.CompositeMapper = {
  serializedName: "UserFileDTOPagedResponseRequestResponse",
  type: {
    name: "Composite",
    className: "UserFileDTOPagedResponseRequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "UserFileDTOPagedResponse"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const UserRequestResponse: msRest.CompositeMapper = {
  serializedName: "UserRequestResponse",
  type: {
    name: "Composite",
    className: "UserRequestResponse",
    modelProperties: {
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "User"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "Composite",
          className: "ErrorMessage"
        }
      }
    }
  }
};

export const UserUpdateDTO: msRest.CompositeMapper = {
  serializedName: "UserUpdateDTO",
  type: {
    name: "Composite",
    className: "UserUpdateDTO",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      }
    }
  }
};
